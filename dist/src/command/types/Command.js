"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.other = {};
        this.onCommand = args.onCommand;
        this.onLoad = args.onLoad;
        this.nsfw = (_a = args.nsfw) !== null && _a !== void 0 ? _a : false;
        this.name = args.name;
        this.aliases = (_b = args.aliases) !== null && _b !== void 0 ? _b : [];
        this.enabled = (_c = args.enabled) !== null && _c !== void 0 ? _c : true;
        this.botOwnerOnly = (_d = args.botOwnerOnly) !== null && _d !== void 0 ? _d : false;
        this.guildOwnerOnly = (_e = args.guildOwnerOnly) !== null && _e !== void 0 ? _e : false;
        this.requiredBotPermissions = (_f = args.requiredBotPermissions) !== null && _f !== void 0 ? _f : [];
        this.requiredUserPermissions = (_g = args.requiredUserPermissions) !== null && _g !== void 0 ? _g : [];
        this.other = (_h = args.other) !== null && _h !== void 0 ? _h : {};
    }
}
exports.Command = Command;
