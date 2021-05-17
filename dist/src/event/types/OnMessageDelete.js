"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnMessageDelete = void 0;
const EventBase_1 = require("./EventBase");
class OnMessageDelete extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("messageDelete", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ message: args[0] });
        };
    }
}
exports.OnMessageDelete = OnMessageDelete;
;
