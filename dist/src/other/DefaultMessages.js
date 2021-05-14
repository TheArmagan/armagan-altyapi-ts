"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMessages = void 0;
class DefaultMessages {
    static cooldownMessage(msg, cooldown) {
        msg.reply(`Slowdown! Slowdown! First you need wait ${(cooldown / 1000).toFixed(2)} seconds!`);
    }
    static nsfwRequiredMessage(msg) {
        console.log("HELLO!!!");
        msg.reply(`This command needs to be used in NSFW channels!`);
    }
}
exports.DefaultMessages = DefaultMessages;
