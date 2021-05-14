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
var _loadCommands, _startMessageListener;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandManager = void 0;
const promises_1 = require("fs/promises");
const path_1 = require("path");
const chillout = require("chillout");
class CommandManager {
    constructor(ul) {
        _loadCommands.set(this, () => __awaiter(this, void 0, void 0, function* () {
            console.log(`Starting to load commands!`);
            let commandFiles = yield promises_1.readdir(path_1.resolve(__dirname, "commands"));
            commandFiles = commandFiles.filter(i => i.toLowerCase().endsWith(".js"));
            yield chillout.forEach(commandFiles, (commandFile) => __awaiter(this, void 0, void 0, function* () {
                let commandFilePath = path_1.resolve(__dirname, "commands", commandFile);
                let cmd = require(commandFilePath);
                cmd.filePath = commandFilePath;
                if (this.commands.has(cmd.name)) {
                    let ogCmd = this.commands.get(cmd.name);
                    throw new Error(`An command already loaded with name "${cmd.name}". (${ogCmd.filePath}, ${commandFilePath})`);
                }
                if (typeof cmd.onCommand != "function")
                    throw new TypeError(`Every command should have onCommand function. (${cmd.name})`);
                this.commands.set(cmd.name, cmd);
                if (typeof cmd.onLoad == "function")
                    yield cmd.onLoad(this.ul);
                console.log(`Command "${cmd.name}" is loaded!`);
            }));
            console.log(`All commands(${this.commands.size}) successfully loaded!`);
        }));
        _startMessageListener.set(this, () => {
            console.log("Starting to listen for the commands!");
            this.ul.client.on("message", this.handleMessage);
            if (this.ul.options.listenForEdits) {
                this.ul.client.on("messageUpdate", (_, newMsg) => {
                    this.handleMessage(newMsg);
                });
            }
        }
        // @ts-ignore for now
        );
        this.ul = ul;
        this.commands = new Map();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _loadCommands).call(this);
            __classPrivateFieldGet(this, _startMessageListener).call(this);
        });
    }
    // @ts-ignore for now
    handleMessage(msg) {
        // let args = plsParse(msg.content);
        // let { prefixes } = this.ul.options;
    }
}
exports.CommandManager = CommandManager;
_loadCommands = new WeakMap(), _startMessageListener = new WeakMap();
