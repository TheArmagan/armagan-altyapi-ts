const { OnReady } = require("../types/OnReady");

module.exports = new OnReady({
  id: "whenReady",
  onEvent(ctx) {
    ctx.ul.client.user.setActivity({
      name: `${ctx.ul.cm.commands.size} komut yüklendi!`
    })
  }
});
