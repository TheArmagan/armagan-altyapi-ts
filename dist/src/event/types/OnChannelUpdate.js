"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnChannelUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnChannelUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("channelUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldChannel: args[0], newChannel: args[1] });
        };
    }
}
exports.OnChannelUpdate = OnChannelUpdate;
;
