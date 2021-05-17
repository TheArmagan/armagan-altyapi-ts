"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnGuildMemberUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnGuildMemberUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("guildMemberUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldMember: args[0], newMember: args[1] });
        };
    }
}
exports.OnGuildMemberUpdate = OnGuildMemberUpdate;
;
