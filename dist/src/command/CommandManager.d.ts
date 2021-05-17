import { Underline } from "../Underline";
import { Command } from "./types/Command";
import { Message } from "discord.js";
export declare class CommandManager {
    #private;
    ul: Underline;
    commands: Map<string, Command>;
    timeoutCache: Map<string, number>;
    constructor(ul: Underline);
    init(): Promise<void>;
    handleMessage(msg: Message): void;
}
