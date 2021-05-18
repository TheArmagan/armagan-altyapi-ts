const { OnMessage } = require("../events/messageExample");

module.exports = new OnMessage({
  id: "messageExample",
  onEvent(ctx) {
    console.log("Event Test", {ctx});
  }
});