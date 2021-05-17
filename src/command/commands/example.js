const { Command } = require("../Command");

module.exports = new Command({
  name: "example",
  onCommand(ctx) {
    console.log(ctx);
    ctx.msg.reply(`Example!`);
  }
});