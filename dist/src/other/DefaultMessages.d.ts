import { Message } from "discord.js";
export declare class DefaultMessages {
    static cooldownMessage(msg: Message, cooldown: number): void;
    static nsfwRequiredMessage(msg: Message): void;
}
