"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnEmojiUpdate = void 0;
const EventBase_1 = require("./EventBase");
class OnEmojiUpdate extends EventBase_1.EventBase {
    constructor(args) {
        var _a;
        super("emojiUpdate", args.id);
        this.onEvent = args.onEvent;
        this.onLoad = args.onLoad;
        this.enabled = (_a = args.enabled) !== null && _a !== void 0 ? _a : true;
        this.handleEventByArgs = (args) => {
            return this.onEvent({ oldEmoji: args[0], newEmoji: args[1] });
        };
    }
}
exports.OnEmojiUpdate = OnEmojiUpdate;
;
