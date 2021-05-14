import { Underline } from "../Underline";
import { Command } from "./Command";
export declare class CommandManager {
    ul: Underline;
    commands: Map<string, Command>;
    constructor(ul: Underline);
    init(): Promise<void>;
}
