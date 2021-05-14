"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.onCommand = args.onCommand;
        this.onLoad = args.onLoad;
        this.nsfw = (_a = args.nsfw) !== null && _a !== void 0 ? _a : false;
        this.cooldown = (_b = args.cooldown) !== null && _b !== void 0 ? _b : 10;
        this.name = args.name;
        this.aliases = (_c = args.aliases) !== null && _c !== void 0 ? _c : [];
        this.usages = (_d = args.usages) !== null && _d !== void 0 ? _d : [];
        this.enabled = (_e = args.enabled) !== null && _e !== void 0 ? _e : false;
        this.ownerOnly = (_f = args.ownerOnly) !== null && _f !== void 0 ? _f : false;
        this.botPermissions = (_g = args.botPermissions) !== null && _g !== void 0 ? _g : [];
        this.userPermissions = (_h = args.userPermissions) !== null && _h !== void 0 ? _h : [];
    }
    return Command;
}());
exports.Command = Command;
