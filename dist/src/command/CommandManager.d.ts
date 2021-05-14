import { Underline } from "../Underline";
import { Command } from "./Command";
import { Message } from "discord.js";
export declare class CommandManager {
    #private;
    ul: Underline;
    commands: Map<string, Command>;
    constructor(ul: Underline);
    init(): Promise<void>;
    handleMessage(msg: Message): void;
}
