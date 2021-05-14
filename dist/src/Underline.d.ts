import { Client, ClientOptions, Message } from "discord.js";
import { CommandManager } from "./command/CommandManager";
import { EventManager } from "./event/EventManager";
export interface IUnderlineOptions {
    token: string;
    prefixes: string[];
    owners?: string[];
    listenForEdits?: boolean;
    message?: IUnderlineMessages;
}
export interface IUnderlineMessages {
    cooldownMessage?(msg: Message, cooldown: number): any;
    nsfwRequiredMessage?(msg: Message): any;
}
export declare class Underline {
    client: Client;
    options: IUnderlineOptions;
    cm: CommandManager;
    em: EventManager;
    constructor(underlineOptions: IUnderlineOptions, clientOptions?: ClientOptions);
    init(): Promise<void>;
}
