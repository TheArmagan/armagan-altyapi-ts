"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnShardResume = void 0;
const EventBase_1 = require("./EventBase");
class OnShardResume extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("shardResume", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ id: args[0], replayedEvents: args[1] });
        };
    }
}
exports.OnShardResume = OnShardResume;
;
