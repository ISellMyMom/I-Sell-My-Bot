const { channel } = require("../../data/config.json");
const { RichEmbed } = require("discord.js");
const { cream } = require("../../data/colours.json");
module.exports = async (bot, message) => {
        if(message.content.includes("clear", "report")) return;
	if(message.channel.name ==  channel.newbie) return;
        let sEmbed = new RichEmbed()
            .setColor(cream)
            .setTitle("Mesaj șters în #" + message.channel.name)
            .setDescription(message.content)
            .setFooter("Trimis de: " + message.author.tag);
            //.setDescription("Mesajul ``" + message.content + "`` din ``#" + message.channel.name + "`` a fost șters de ``" + message.author.tag + "``");

	bot.channels.find(x => x.name === channel.messageslog).send(sEmbed);//("Mesajul ``" + message.content + "`` din ``#" + message.channel.name + "`` trimis de ``" + message.author.tag + "`` a fost sters.");
}
