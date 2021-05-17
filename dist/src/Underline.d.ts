import { Client, ClientOptions, Message, PermissionString } from "discord.js";
import { CommandManager } from "./command/CommandManager";
import { EventManager } from "./event/EventManager";
export interface IUnderlineOptions {
    token: string;
    prefixes: string[];
    owners?: string[];
    listenForEdits?: boolean;
    messages?: IUnderlineMessages;
}
export interface IUnderlineMessages {
    cooldownMessage?(msg: Message, cooldown: number): any;
    nsfwRequiredMessage?(msg: Message): any;
    botOwnerOnlyMessage?(msg: Message): any;
    guildOwnerOnlyMessage?(msg: Message): any;
    botPermissionsRequiredMessage?(msg: Message, perms: PermissionString[]): any;
    userPermissionsRequiredMessage?(msg: Message, perms: PermissionString[]): any;
}
export declare class Underline {
    client: Client;
    options: IUnderlineOptions;
    cm: CommandManager;
    em: EventManager;
    constructor(underlineOptions: IUnderlineOptions, clientOptions?: ClientOptions);
    init(): Promise<void>;
}
