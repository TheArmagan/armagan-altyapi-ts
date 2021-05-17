"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnMessageReactionRemove = void 0;
const EventBase_1 = require("./EventBase");
class OnMessageReactionRemove extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("messageReactionRemove", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ messageReaction: args[0], user: args[1] });
        };
    }
}
exports.OnMessageReactionRemove = OnMessageReactionRemove;
;
