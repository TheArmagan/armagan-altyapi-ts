import { Client, ClientOptions } from "discord.js";
import { CommandManager } from "./command/CommandManager";
import { EventManager } from "./event/EventManager";
export interface IUnderlineOptions {
    token: string;
    prefixes: string[];
    owners?: string[];
}
export declare class Underline {
    client: Client;
    options: IUnderlineOptions;
    cm: CommandManager;
    em: EventManager;
    constructor(underlineOptions: IUnderlineOptions, clientOptions: ClientOptions);
    init(): Promise<void>;
}
