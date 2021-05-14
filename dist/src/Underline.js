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
class Underline {
    constructor(underlineOptions, clientOptions) {
        var _a, _b;
        this.options = {
            token: "",
            prefixes: [],
            owners: [],
            listenForEdits: false
        };
        if (typeof underlineOptions.token != "string")
            throw new TypeError("Token must be a string");
        if (!(Array.isArray(underlineOptions.prefixes) && underlineOptions.prefixes.length != 0))
            throw new TypeError("Prefixes must be a array and prefixes array should be a minimum length of 1");
        this.options = {
            token: underlineOptions.token,
            prefixes: underlineOptions.prefixes,
            owners: (_a = underlineOptions.owners) !== null && _a !== void 0 ? _a : [],
            listenForEdits: (_b = underlineOptions.listenForEdits) !== null && _b !== void 0 ? _b : false
        };
        this.client = new discord_js_1.Client(clientOptions);
        this.cm = new CommandManager_1.CommandManager(this);
        this.em = new EventManager_1.EventManager(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cm.init();
            yield this.em.init();
        });
    }
}
exports.Underline = Underline;
