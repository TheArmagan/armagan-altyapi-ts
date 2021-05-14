import { Message } from "discord.js";
import { Result } from "plsargs/src/Result";
import { Underline } from "../Underline";
interface ICommandClassArguments {
    onCommand(ctx: IOnCommandArgument): any;
    onLoad?(ul: Underline): any;
    nsfw?: boolean;
    cooldown?: number;
    name: string;
    aliases?: string[];
    usages?: string[];
    enabled?: boolean;
    ownerOnly?: boolean;
    botPermissions?: string[];
    userPermissions?: string[];
}
interface IOnCommandArgument {
    msg: Message;
    args: Result;
    ul: Underline;
}
export declare class Command {
    onCommand: (arg0: IOnCommandArgument) => any;
    onLoad?: (arg0: Underline) => any;
    nsfw?: boolean;
    cooldown?: number;
    name: string;
    aliases?: string[];
    usages?: string[];
    enabled?: boolean;
    ownerOnly?: boolean;
    botPermissions?: string[];
    userPermissions?: string[];
    filePath: string;
    constructor(args: ICommandClassArguments);
}
export {};
