import { EventBase, IEventArgumentBase, IOnEventArgumentsBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments extends IOnEventArgumentsBase {
  rateLimitInfo: {timeout: number, limit: number, method: string, path: string, route: string};
}


export class OnRateLimit extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("rateLimit", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;

    this.handleEventByArgs = (args, ul)=>{
      return this.onEvent({ rateLimitInfo: args[0], ul });
    }
  }
};