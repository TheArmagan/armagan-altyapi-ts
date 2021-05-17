"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnGuildCreate = void 0;
const EventBase_1 = require("./EventBase");
class OnGuildCreate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("guildCreate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ guild: args[0] });
        };
    }
}
exports.OnGuildCreate = OnGuildCreate;
;
