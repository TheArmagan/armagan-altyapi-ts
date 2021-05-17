import { Underline } from "../../Underline";
export interface IEventArgumentBase {
    onEvent: (ctx: any) => any;
    onLoad?: (ul: Underline) => any;
    enabled?: Boolean;
    id: string;
}
export declare class EventBase {
    onEvent: (ctx: any) => any;
    handleEventByArgs: (args: any[]) => any;
    onLoad?: (ul: Underline) => any;
    name: string;
    enabled: Boolean;
    id: string;
    filePath: string;
    other: {
        [key: string]: any;
    };
    constructor(name: string, id: string);
}
