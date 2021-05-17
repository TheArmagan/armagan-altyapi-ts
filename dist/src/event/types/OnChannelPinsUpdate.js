"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnChannelPinsUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnChannelPinsUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("channelPinsUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ channel: args[0], time: args[1] });
        };
    }
}
exports.OnChannelPinsUpdate = OnChannelPinsUpdate;
;
