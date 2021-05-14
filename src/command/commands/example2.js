const { Command } = require("../Command");

module.exports = new Command({
  name: "example2",
  onCommand(ctx) {
    console.log(ctx);
    ctx.msg.reply(`Example2!`);
  }
});