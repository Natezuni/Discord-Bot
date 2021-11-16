const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    cooldown: function (message) {
       
        const Embed = new Discord.MessageEmbed()

            .setTitle(`Timer`)
            .setImage(` https://www.timeanddate.com/countdown/generic?iso=20201026T18&p0=236&msg=Talent+Management+in+%3A30+Minutes+%28Webinar+1%29+-+Business+and+Talent%3A+Alignment+or+Discord%3F&font=cursive&csz=1`, 'test')

        return message.channel.send(Embed)

    }
}

