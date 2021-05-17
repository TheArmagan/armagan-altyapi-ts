const { OnMessage } = require("../types/OnMessage");

module.exports = new OnMessage({
  id: "messageExample",
  onEvent(ctx) {
    console.log("Event Test", ctx.message, );
    
  }
});