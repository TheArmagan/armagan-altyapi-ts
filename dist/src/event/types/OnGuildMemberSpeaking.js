"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnGuildMemberSpeaking = void 0;
const EventBase_1 = require("./EventBase");
class OnGuildMemberSpeaking extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("guildMemberSpeaking", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ member: args[0], speaking: args[1] });
        };
    }
}
exports.OnGuildMemberSpeaking = OnGuildMemberSpeaking;
;
