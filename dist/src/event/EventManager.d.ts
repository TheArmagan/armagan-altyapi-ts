import { Underline } from "../Underline";
export declare class EventManager {
    ul: Underline;
    constructor(ul: Underline);
    init(): Promise<void>;
}
