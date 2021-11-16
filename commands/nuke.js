const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    nuke: function (message) {
        x = 100;
        for (I = 0; I < 10; I++) {
            message.channel.bulkDelete(100).then(() => {
                message.channel.send(`${x} messages deleted`).then(msg => msg.delete(3000));
                x += 100;
            });
        }
        message.channel.send('Nuked');
    }
}
