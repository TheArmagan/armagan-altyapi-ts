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
const path = require("path");
const chillout = require("chillout");
const plsargs_1 = require("plsargs");
class CommandManager {
    constructor(ul) {
        _loadCommands.set(this, () => __awaiter(this, void 0, void 0, function* () {
            console.log(`Starting to load commands!`);
            let commandFiles = yield promises_1.readdir(path.resolve(__dirname, "commands"));
            commandFiles = commandFiles.filter(i => i.toLowerCase().endsWith(".js"));
            yield chillout.forEach(commandFiles, (commandFile) => __awaiter(this, void 0, void 0, function* () {
                let commandFilePath = path.resolve(__dirname, "commands", commandFile);
                let cmd = require(commandFilePath);
                cmd.filePath = commandFilePath;
                if (this.commands.has(cmd.name)) {
                    let ogCmd = this.commands.get(cmd.name);
                    throw new Error(`A command already loaded with name "${cmd.name}". (${path.parse(ogCmd.filePath).base}, ${path.parse(commandFilePath).base})`);
                }
                if (typeof cmd.onCommand != "function")
                    throw new TypeError(`Every command should have onCommand function. (NAME: ${cmd.name})`);
                cmd.aliases.unshift(cmd.name);
                this.commands.set(cmd.name, cmd);
                if (typeof cmd.onLoad == "function")
                    yield cmd.onLoad(this.ul);
                console.log(`Command "${cmd.name}" is loaded!`);
            }));
            console.log(`All commands(${this.commands.size}) successfully loaded!`);
        }));
        _startMessageListener.set(this, () => {
            console.log("Starting to listen for the commands!");
            this.ul.client.on("message", (msg) => {
                this.handleMessage(msg);
            });
            if (this.ul.options.listenForEdits) {
                this.ul.client.on("messageUpdate", (_, newMsg) => {
                    this.handleMessage(newMsg);
                });
            }
        });
        this.ul = ul;
        this.commands = new Map();
        this.timeoutCache = new Map();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _loadCommands).call(this);
            __classPrivateFieldGet(this, _startMessageListener).call(this);
        });
    }
    handleMessage(msg) {
        let self = this;
        let { prefixes } = this.ul.options;
        let isBotOwner = this.ul.options.owners.some(i => i == msg.author.id);
        let isCommandFound = false;
        this.commands.forEach((cmd) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (isCommandFound)
                return;
            let args = plsargs_1.plsParseArgs(msg.content);
            if (!cmd.enabled)
                return;
            let usedPrefix = "";
            yield chillout.forEach(prefixes, i => {
                let prefix = args._[0].slice(0, i.length);
                if (prefix == i)
                    usedPrefix = i;
                return prefix == i;
            });
            if (usedPrefix.length == 0)
                return;
            args._[0] = args._[0].slice(usedPrefix.length);
            if (args._[0].length == 0)
                args._.shift();
            if (!cmd.aliases.some(i => args._[0].toLowerCase() == i.toLowerCase()))
                return;
            isCommandFound = true;
            if (cmd.botOwnerOnly && !isBotOwner) {
                return this.ul.options.messages.botOwnerOnlyMessage(msg);
            }
            if (cmd.guildOwnerOnly && (msg.member.id == msg.guild.ownerID)) {
                return this.ul.options.messages.botOwnerOnlyMessage(msg);
            }
            if (cmd.nsfw && !((_a = msg.channel) === null || _a === void 0 ? void 0 : _a.nsfw)) {
                return this.ul.options.messages.nsfwRequiredMessage(msg);
            }
            if (cmd.requiredBotPermissions.length != 0 && cmd.requiredBotPermissions.some(i => !msg.guild.me.hasPermission(i, { checkAdmin: true, checkOwner: true }))) {
                return this.ul.options.messages.botPermissionsRequiredMessage(msg, cmd.requiredBotPermissions);
            }
            if (cmd.requiredUserPermissions.length != 0 && cmd.requiredUserPermissions.some(i => !msg.member.hasPermission(i, { checkAdmin: true, checkOwner: true }))) {
                return this.ul.options.messages.userPermissionsRequiredMessage(msg, cmd.requiredUserPermissions);
            }
            let coolDownAt = (self.timeoutCache.get(`${msg.author.id}:${cmd.name}`) || 0);
            let coolDownDuration = coolDownAt - Date.now();
            if (!(Date.now() > coolDownAt)) {
                return this.ul.options.messages.cooldownMessage(msg, coolDownDuration);
            }
            cmd.onCommand({ args, msg, ul: this.ul, prefix: usedPrefix, isBotOwner, cooldown: coolDownDuration, setCoolDown(durationMs = 0) {
                    self.timeoutCache.set(`${msg.author.id}:${cmd.name}`, Date.now() + durationMs);
                    return true;
                } });
        }));
    }
}
exports.CommandManager = CommandManager;
_loadCommands = new WeakMap(), _startMessageListener = new WeakMap();
