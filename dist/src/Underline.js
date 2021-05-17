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
const Log_1 = require("./other/Log");
class Underline {
    constructor(underlineOptions, clientOptions = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        if (typeof underlineOptions.token != "string")
            throw new TypeError("Token must be a string");
        if (!(Array.isArray(underlineOptions.prefixes) && underlineOptions.prefixes.length != 0))
            throw new TypeError("Prefixes must be a array and prefixes array should be a minimum length of 1");
        this.options = {
            token: underlineOptions.token,
            prefixes: underlineOptions.prefixes,
            owners: (_a = underlineOptions.owners) !== null && _a !== void 0 ? _a : [],
            listenForEdits: (_b = underlineOptions.listenForEdits) !== null && _b !== void 0 ? _b : false,
            messages: {
                cooldownMessage: (_d = (_c = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.messages) === null || _c === void 0 ? void 0 : _c.cooldownMessage) !== null && _d !== void 0 ? _d : DefaultMessages_1.DefaultMessages.cooldownMessage,
                nsfwRequiredMessage: (_f = (_e = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.messages) === null || _e === void 0 ? void 0 : _e.nsfwRequiredMessage) !== null && _f !== void 0 ? _f : DefaultMessages_1.DefaultMessages.nsfwRequiredMessage,
                botOwnerOnlyMessage: (_h = (_g = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.messages) === null || _g === void 0 ? void 0 : _g.botOwnerOnlyMessage) !== null && _h !== void 0 ? _h : DefaultMessages_1.DefaultMessages.botOwnerOnlyMessage,
                guildOwnerOnlyMessage: (_k = (_j = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.messages) === null || _j === void 0 ? void 0 : _j.guildOwnerOnlyMessage) !== null && _k !== void 0 ? _k : DefaultMessages_1.DefaultMessages.guildOwnerOnlyMessage,
                botPermissionsRequiredMessage: (_m = (_l = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.messages) === null || _l === void 0 ? void 0 : _l.botPermissionsRequiredMessage) !== null && _m !== void 0 ? _m : DefaultMessages_1.DefaultMessages.botPermissionsRequiredMessage,
                userPermissionsRequiredMessage: (_p = (_o = underlineOptions === null || underlineOptions === void 0 ? void 0 : underlineOptions.messages) === null || _o === void 0 ? void 0 : _o.userPermissionsRequiredMessage) !== null && _p !== void 0 ? _p : DefaultMessages_1.DefaultMessages.userPermissionsRequiredMessage,
            },
            other: (_q = underlineOptions.other) !== null && _q !== void 0 ? _q : {}
        };
        this.client = new discord_js_1.Client(clientOptions);
        this.cm = new CommandManager_1.CommandManager(this);
        this.em = new EventManager_1.EventManager(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            Log_1.Log.info(`Initializing!`);
            Log_1.Log.info(`Command manager initializing!`);
            yield this.cm.init();
            Log_1.Log.success(`Command manager initialized!`);
            Log_1.Log.info(`Event manager initializing!`);
            yield this.em.init();
            Log_1.Log.success(`Event manager initialized!`);
            yield this.client.login(this.options.token);
            Log_1.Log.success(`Connected to discord. (User "${this.client.user.tag}")`);
        });
    }
}
exports.Underline = Underline;
