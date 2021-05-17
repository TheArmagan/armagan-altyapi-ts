"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnVoiceStateUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnVoiceStateUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("voiceStateUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldState: args[0], newState: args[1] });
        };
    }
}
exports.OnVoiceStateUpdate = OnVoiceStateUpdate;
;
