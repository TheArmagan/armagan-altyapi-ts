"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnRoleUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnRoleUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("roleUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldRole: args[0], newRole: args[1] });
        };
    }
}
exports.OnRoleUpdate = OnRoleUpdate;
;
