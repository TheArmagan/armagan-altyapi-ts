const { Command } = require("../Command");

module.exports = new Command({
  name: "timeouttest",
  onCommand(ctx) {
    console.log(ctx);
    ctx.msg.reply(`timeouttest!`);
    ctx.setCoolDown(5000);
  }
});