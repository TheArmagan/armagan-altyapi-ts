"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnUserUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnUserUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("userUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldUser: args[0], newUser: args[1] });
        };
    }
}
exports.OnUserUpdate = OnUserUpdate;
;
