const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    rep: function (message) {
        try {
            if (message.content.startsWith(">rep")) {
                let user = message.mentions.users.first().id;
                var readmessagefile = fs.readFileSync('./txt-files/rep.txt', 'utf-8');
                let result = readmessagefile.split(user).length - 1;
                console.log(result)
                message.channel.send(`<@${user}> has **${result}** points!`)
            }

            if (message.content.startsWith(">+rep")) {
                let user = message.mentions.users.first().id;
                var readmessagefile = fs.readFileSync('./txt-files/rep.txt', 'utf-8');
                var writemessagefile = fs.writeFileSync('./txt-files/rep.txt', user + '\n' + readmessagefile);
                message.channel.send(`Added +1 rep to <@${user}>`);
            } else if (message.content.startsWith(">-rep")) {
                let user = message.mentions.users.first().id;

                fs.readFile('./txt-files/rep.txt', 'utf8', function (err, data) {
                    var formatted = data.replace(user, '');
                    fs.writeFile('./txt-files/rep.txt', formatted, 'utf8', function (err) {
                        if (err) return console.log(err);
                    });
                });
                message.channel.send(`Removed -1 rep from <@${user}>`);
            }
        } catch(err) {
            message.channel.send("Wrong format");
        }
    } 
}
