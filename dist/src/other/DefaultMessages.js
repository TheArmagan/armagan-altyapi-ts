"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMessages = void 0;
class DefaultMessages {
    static cooldownMessage(msg, cooldown) {
        msg.reply(`Slowdown! Slowdown! First you need wait ${(cooldown / 1000).toFixed(2)} seconds!`);
    }
    static nsfwRequiredMessage(msg) {
        msg.reply(`This command needs to be used in NSFW channels!`);
    }
    static botOwnerOnlyMessage(msg) {
        msg.reply(`You need to be bot owner to use this command!`);
    }
    static guildOwnerOnlyMessage(msg) {
        msg.reply(`You need to be guild owner to use this command!`);
    }
    static botPermissionsRequiredMessage(msg, perms) {
        msg.reply(`Bot needs ${perms} permissions to work!`);
    }
    static userPermissionsRequiredMessage(msg, perms) {
        msg.reply(`You need these ${perms} permissions to bot work.`);
    }
}
exports.DefaultMessages = DefaultMessages;
