const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    list: function (message) {
        var content = fs.readFileSync('./txt-files/scammer.txt', 'utf-8');
        Embed = new Discord.MessageEmbed()
        .setTitle('List Of Scammers')
        .setDescription(content)
        .setColor('RED')
        message.channel.send(Embed);
        
    }
}
