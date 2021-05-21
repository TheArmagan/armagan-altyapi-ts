const fetch = require("node-fetch").default;
const { plsParseArgs } = require("plsargs");
const { Command } = require("../types/Command");
const { MessageEmbed } = require("discord.js");

let types = ["USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"];

module.exports = new Command({
  name: "currency",
  async onCommand({msg}) {
    let argv = plsParseArgs(msg.content);
    if (["list", "listele"].includes(argv.get(1).toLowerCase())) return msg.reply(`Kurlar: \`${types.join(", ")}\``);
    let from = (argv.get(1) || "USD").toUpperCase();
    let val = isNaN(parseInt(argv.get(2))) ? 1 : parseInt(argv.get(2));
    if (!types.includes(from)) return msg.reply(`Geçerli kur tipleri: \`${types.join(", ")}\``);
    let url = `https://raw.githubusercontent.com/TheArmagan/currency/main/api/${from}-to-ALL.json`;
    let json = (await (await fetch(url)).json());
    let embed = new MessageEmbed();
    let curs = Object.entries(json.to).map(([key, value]) => {
      return `**\`${(value*val).toFixed(2)} ${key}\`**`
    });
    embed.setDescription(curs.join(", "));
    embed.setColor("GREEN");
    embed.setTitle(`__\`${from}\` kurundan diğer tüm kurlar \`${val}\` değerinde:__`);
    msg.channel.send(embed);
  },
  aliases: ["kur", "parabirimi"],
  other: {
    description: "Kur dönüştürmenizi sağlar!",
    usage: "[p]kur [<from>|liste] [value]"
  }
})