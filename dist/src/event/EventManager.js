"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _loadCommands, _startEventListeners;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
const path = require("path");
const Log_1 = require("../other/Log");
const chillout = require("chillout");
const recursiveReadDir = require("recursive-readdir");
class EventManager {
    constructor(ul) {
        _loadCommands.set(this, () => __awaiter(this, void 0, void 0, function* () {
            Log_1.Log.info(`Starting to load events!`);
            let eventFiles = yield recursiveReadDir(path.resolve(__dirname, "events"));
            eventFiles = eventFiles.filter(i => i.toLowerCase().endsWith(".js"));
            yield chillout.forEach(eventFiles, (eventFile) => __awaiter(this, void 0, void 0, function* () {
                let eventFilePath = path.resolve(__dirname, "events", eventFile);
                let evt = require(eventFilePath);
                evt.filePath = eventFilePath;
                if (this.events.has(evt.id)) {
                    let ogEvt = this.events.get(evt.id);
                    throw new Error(`A event already loaded with id "${evt.id}". (${path.parse(ogEvt.filePath).base}, ${path.parse(eventFilePath).base})`);
                }
                if (typeof evt.onEvent != "function")
                    throw new TypeError(`Every event should have onEvent function. (ID: ${evt.id})`);
                this.events.set(evt.id, evt);
                if (typeof evt.onLoad == "function")
                    yield evt.onLoad(this.ul);
                Log_1.Log.success(`Event "${evt.id}" is loaded!`);
            }));
            Log_1.Log.success(`All events(${this.events.size}) successfully loaded!`);
        }));
        _startEventListeners.set(this, () => __awaiter(this, void 0, void 0, function* () {
            Log_1.Log.info("Optimizing event listeners!");
            let eventsToListen = new Map();
            yield chillout.forEach(Array.from(this.events.entries()), ([eventId, event]) => {
                if (!eventsToListen.has(event.name))
                    eventsToListen.set(event.name, []);
                eventsToListen.get(event.name).push(eventId);
            });
            Log_1.Log.info("Starting to listen for the events!");
            yield chillout.forEach(Array.from(eventsToListen.entries()), ([eventName, eventIds]) => {
                Log_1.Log.info(`Event Name: ${eventName}, Listeners(${eventIds.length}): ${eventIds.join(", ")}`);
                this.ul.client.on(eventName, (...args) => {
                    chillout.forEach(eventIds, (eventId) => {
                        this.handleEvent(eventId, args);
                    });
                });
            });
            Log_1.Log.success("Started to listening for events!");
        }));
        this.ul = ul;
        this.events = new Map();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _loadCommands).call(this);
            __classPrivateFieldGet(this, _startEventListeners).call(this);
        });
    }
    handleEvent(eventId, args) {
        let event = this.events.get(eventId);
        if (event.enabled) {
            event.handleEventByArgs(args);
        }
    }
}
exports.EventManager = EventManager;
_loadCommands = new WeakMap(), _startEventListeners = new WeakMap();
