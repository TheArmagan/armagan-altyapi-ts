import { Underline } from "../../Underline";


export interface IEventArgumentBase {
  onEvent: (ctx: any) => any;

  onLoad?: (ul: Underline) => any;

  enabled?: Boolean;

  id: string;
}

export interface IOnEventArgumentsBase {
  ul: Underline;

  [key: string]: any;
}

export class EventBase {

  onEvent: (ctx: any) => any;

  handleEventByArgs: (args: any[], ul: Underline) => any;

  onLoad?: (ul: Underline) => any;

  name: string;

  enabled: Boolean;

  id: string;

  filePath: string;

  other: { [key: string]: any } = {};

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}