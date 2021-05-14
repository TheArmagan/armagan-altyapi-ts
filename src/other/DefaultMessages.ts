import { Message, PermissionString } from "discord.js";

export class DefaultMessages {
  static cooldownMessage(msg: Message, cooldown: number) {
    msg.reply(`Slowdown! Slowdown! First you need wait ${(cooldown / 1000).toFixed(2)} seconds!`);
  }

  static nsfwRequiredMessage(msg: Message) {
    msg.reply(`This command needs to be used in NSFW channels!`)
  }

  static botOwnerOnlyMessage(msg: Message) {
    msg.reply(`You need to be bot owner to use this command!`);
  }

  static guildOwnerOnlyMessage(msg: Message) {
    msg.reply(`You need to be guild owner to use this command!`);
  }

  static botPermissionsRequiredMessage(msg: Message, perms: PermissionString[]) {
    msg.reply(`Bot needs ${perms} permissions to work!`);
  }

  static userPermissionsRequiredMessage(msg: Message, perms: PermissionString[]) {
    msg.reply(`You need these ${perms} permissions to bot work.`);
  }
}