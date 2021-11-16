const Discord = require('discord.js');
const { Message } = require("discord.js")
const fs = require('fs');
const { OutgoingMessage } = require('http');



module.exports = {
    giveaway: function (message) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setTitle("Giveaway!")
            .setDescription("Giveaway content here.");
        message.channel.send(embed);
        
    
    }       
}
