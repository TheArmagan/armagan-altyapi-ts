var Command = require("../Command").Command;
module.exports = new Command({
    name: "example",
    onCommand: function (_a) {
        var msg = _a.msg;
        msg.reply("Hello!");
    }
});
