const Discord = require('discord.js');
const client = new Discord.Client();
const Octo = "xxx";

module.exports = {
    benn: function (message) {
        message.delete({ timeout: 0 })
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds || report`))
        .catch(console.error);
        const Embed = new Discord.MessageEmbed();
        Embed.setTitle("Ben");
        Embed.setDescription("Ben's description should go here.")
        Embed.addField("Here is Ben's website: https://dfsdfsdf.com")
        Embed.setImage("Link-to-image")
        return message.channel.send(Embed);
        
    }
}
