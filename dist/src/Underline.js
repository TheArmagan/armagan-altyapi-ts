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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Underline = void 0;
const discord_js_1 = require("discord.js");
const CommandManager_1 = require("./command/CommandManager");
const EventManager_1 = require("./event/EventManager");
const DefaultMessages_1 = require("./other/DefaultMessages");
class Underline {
    constructor(underlineOptions, clientOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        if (typeof underlineOptions.token != "string")
            throw new TypeError("Token must be a string");
        if (!(Array.isArray(underlineOptions.prefixes) && underlineOptions.prefixes.length != 0))
            throw new TypeError("Prefixes must be a array and prefixes array should be a minimum length of 1");
        this.options = {
            token: underlineOptions.token,
            prefixes: underlineOptions.prefixes,
            owners: (_a = underlineOptions.owners) !== null && _a !== void 0 ? _a : [],
            listenForEdits: (_b = underlineOptions.listenForEdits) !== null && _b !== void 0 ? _b : false,
            message: {
                cooldownMessage: (_d = (_c = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.message) === null || _c === void 0 ? void 0 : _c.cooldownMessage) !== null && _d !== void 0 ? _d : DefaultMessages_1.DefaultMessages.cooldownMessage,
                nsfwRequiredMessage: (_f = (_e = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.message) === null || _e === void 0 ? void 0 : _e.nsfwRequiredMessage) !== null && _f !== void 0 ? _f : DefaultMessages_1.DefaultMessages.nsfwRequiredMessage
            }
        };
        this.client = new discord_js_1.Client(clientOptions);
        this.cm = new CommandManager_1.CommandManager(this);
        this.em = new EventManager_1.EventManager(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Initializing!`);
            yield this.cm.init();
            console.log(`Command manager initialized!`);
            yield this.em.init();
            console.log(`Event manager initialized!`);
            yield this.client.login(this.options.token);
            console.log(`Connected to discord. (User "${this.client.user.tag}")`);
        });
    }
}
exports.Underline = Underline;