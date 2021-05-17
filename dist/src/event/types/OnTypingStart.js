"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnTypingStart = void 0;
const EventBase_1 = require("./EventBase");
class OnTypingStart extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("typingStart", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ channel: args[0], user: args[1] });
        };
    }
}
exports.OnTypingStart = OnTypingStart;
;
