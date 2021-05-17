"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnGuildUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnGuildUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("guildUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldGuild: args[0], newGuild: args[1] });
        };
    }
}
exports.OnGuildUpdate = OnGuildUpdate;
;
