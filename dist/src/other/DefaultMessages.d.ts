import { Message, PermissionString } from "discord.js";
export declare class DefaultMessages {
    static cooldownMessage(msg: Message, cooldown: number): void;
    static nsfwRequiredMessage(msg: Message): void;
    static botOwnerOnlyMessage(msg: Message): void;
    static guildOwnerOnlyMessage(msg: Message): void;
    static botPermissionsRequiredMessage(msg: Message, perms: PermissionString[]): void;
    static userPermissionsRequiredMessage(msg: Message, perms: PermissionString[]): void;
}
