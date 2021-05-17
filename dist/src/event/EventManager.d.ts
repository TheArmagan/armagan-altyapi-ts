import { Underline } from "../Underline";
import { EventBase } from "./types/EventBase";
export declare class EventManager {
    #private;
    ul: Underline;
    events: Map<string, EventBase>;
    constructor(ul: Underline);
    init(): Promise<void>;
    handleEvent(eventId: string, args: any[]): void;
}
