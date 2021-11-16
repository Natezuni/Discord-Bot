const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    help: function (message) {
        const Embed = new Discord.MessageEmbed();
        Embed.setTitle('Bot Commands');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        Embed.addField('**>command**', 'What the command does');
        
        message.channel.send(Embed);
    }
}









