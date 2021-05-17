"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnPresenceUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnPresenceUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("presenceUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldPresence: args[0], newPresence: args[1] });
        };
    }
}
exports.OnPresenceUpdate = OnPresenceUpdate;
;
