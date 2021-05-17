"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnReady = void 0;
const EventBase_1 = require("./EventBase");
class OnReady extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("ready", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = () => {
            return this.onEvent({});
        };
    }
}
exports.OnReady = OnReady;
;