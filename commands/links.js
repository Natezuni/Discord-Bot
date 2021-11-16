const Discord = require('discord.js');
const client = new Discord.Client();
const Salty = "xxx";
const Octo = "xxx";

module.exports = {
    links: function (message) {
        if (message.author.id === Octo) {
            const Embed = new Discord.MessageEmbed()
            Embed.setTitle("Nathan's links");
            Embed.addField("TikTok: https://localhost.com", "Check out my TikTok!")
            Embed.addField("Instagram: https://localhost.com", "Check out my Instagram!")
            return message.channel.send(Embed);
        } 
        if (message.author.id === Salty) {
            const Embed = new Discord.MessageEmbed()
            Embed.setTitle("John's links");
            Embed.addField("TikTok: https://localhost.com", "Check out my TikTok!")
            Embed.addField("Instagram: https://localhost.com", "Check out my Instagram!")
            return message.channel.send(Embed);
        }
    }
}
