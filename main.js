const { DH_UNABLE_TO_CHECK_GENERATOR, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
var https = require("https");
const client = new Discord.Client();
const Flurries = "526862000933044234";
const Salty = "503303816033337365";
const Octo = "202971395393585152";
const serverId = '727640959634112553';
const fs = require('fs');
const prefix = '>';
const adminId = '727646416834396171';
const testfunction = require('./commands/test.js');
const cmdStatus = require('./commands/status.js');
const cmdReport = require('./commands/report.js');
const cmdSuggestions = require('./commands/suggestions.js');
const cmdUsers = require('./commands/users.js');
const cmdHelp = require('./commands/help.js');
const cmdFlurries = require('./commands/flurries.js');
const blacklist = require('./commands/blacklist.js');
const autoLogs = require('./commands/logs.js');
const cmdLinks = require('./commands/links.js');
const cmdNuke = require('./commands/nuke.js');
const cmdBruh = require('./commands/bruh.js');
var cmdJokes = require('./commands/jokes.js');
const cmdKill = require('./commands/kill.js');
const cmdSlowmode = require('./commands/slowmode.js');
const cmdMuteLog = require('./commands/mutelog.js');
const cmdunMuteLog = require('./commands/unmutelog.js');
const cmdWarnLog = require('./commands/warnlogs.js');
const cmdPP = require('./commands/pp.js');
const cmdBenn = require('./commands/benn.js');
//const cmdSendLogs = require('./commands/sendLogs.js');
const cmdExec = require('./commands/execMsg.js');
const cmdMuteVoice = require('./commands/voiceMute.js');
const cmdUnMuteVoice = require('./commands/unMuteVoice.js');
const cmdRandom = require('./commands/random.js');
const cmdRep = require('./commands/rep.js');
const cmdQuickResponse = require('./commands/quickresponse.js');
const { response } = require('./commands/quickresponse.js');



client.once('ready', () => {
    console.log('Online, running version --> 1.0.2');
    console.log(client.users);
    client.user.setActivity("with Flurries's mother");

    //client.channels.cache.get('727645373958586368').send('Online, running version --> 1.0.2');
});



client.on('message', async message => {

    const filter = (m) => m.author.id === message.author.id;


    /*
        if (message.content === ">doggo" && message.author.id === Salty) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./audio/doggo.mp4');
            dispatcher.on('start', () => {
                console.log("Audio playing");
            });
            dispatcher.on('finish', () => {
                console.log("Audio done playing");
            });
        }
    */
});


client.on("message", function (message) {
    console.log("\x1b[0m", "");
    //autoLogs.logs(message);
    
    //blacklist.blacklist(message);

    const filter = (m) => m.author.id === message.author.id;


    if (message.content.startsWith('>response')) {
        cmdQuickResponse.response(message);
    }


 

/*
    if (message.author.id === '503303816033337365') {
        message.delete({ timeout: 0 })
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds || report`))
        .catch(console.error);
        message.channel.send("Finish your exam then you can speak");
    }
  */  

    /*
    if (message.content.startsWith('>eval')) {
        if (message.author.id === '503303816033337365') {
        x = message.content.slice(6, message.content.length);
        console.log("\x1b[31m");
        console.log(eval(x));
        } else {
            message.channel.send("You don't have the pemissions to do that.");
        }
    }
*/
    if (message.content === '>report') {
        if (message.member.roles.cache.has('783449006101495848') || message.member.roles.cache.has('727646416834396171') || message.member.roles.cache.has('727646559675614325') || message.member.roles.cache.has('766473163335925811') || message.member.roles.cache.has('782419140912218122')) {
            if (message.channel.id === '786971182208647219') {
                author = message.author.id;
                message.channel.send("What is the name of the user ?");
                message.channel
                    .awaitMessages(filter, { max: 1, time: 20000, error: ['timeout'] })
                    .then((collected) => {
                        console.log(collected.size);
                        const name = collected.first();
                        console.log(name.content);
                        message.channel.send("How long is the current mute ?");
                        message.channel
                            .awaitMessages(filter, { max: 1, time: 20000, error: ['timeout'] })
                            .then((collected) => {
                                console.log(collected.size);
                                const action = collected.first();
                                console.log(action.content);
                                message.channel.send("How long would you want the mute to be extended to ?");
                                message.channel
                                    .awaitMessages(filter, { max: 1, time: 20000, error: ['timeout'] })
                                    .then((collected) => {
                                        console.log(collected.size);
                                        const duration = collected.first();
                                        console.log(duration.content);
                                        message.channel.send("Why should that member's mute be extended ?");
                                        message.channel
                                            .awaitMessages(filter, { max: 1, time: 20000, error: ['timeout'] })
                                            .then((collected) => {
                                                console.log(collected.size);
                                                const reason = collected.first();
                                                console.log(reason.content);
                                                message.channel.bulkDelete(9);
                                                const Embed = new Discord.MessageEmbed()
                                                    .setColor('RED')
                                                    .setTitle(`${name}'s Extention Request`)
                                                    .addField(`**Name: **`, name)
                                                    .addField(`**Current Mute Length: **`, action)
                                                    .addField(`**Extend mute to: **`, duration)
                                                    .addField(`**Reason: **`, reason)
                                                    .addField(`**Reported by: **`, `<@${author}>`);
                                                return message.channel.send(Embed).then(Embed => {
                                                    Embed.react('✅');
                                                    Embed.react('❌');
                                                });
                                            })
                                            .catch((err) => console.log(err));
                                    })
                                    .catch((err) => console.log(err));
                            })
                            .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));
            } else {
                message.channel.send("Wrong channel");
            }
        } else {
            message.channel.send("You don't have the permissions to use this command.");
        }

    }


    if (message.content.startsWith('-mute')) {
        let user = message.mentions.users.first().id;
        const string = message.content;
        const words = string.split(' ');
        const channel = client.channels.cache.find(channel => channel.id === '778396780089966632');
        const index = string.indexOf(' ', string.indexOf(' ') + 1);
        var secondChunk = string.substr(index + 4);

        const Embed = new Discord.MessageEmbed()
            .setColor("RED")          
            .addField('**Name:**', `<@${user}>`)
            .addField('**Action:**', 'Mute')
            .addField('**Time:**', `${words[2]}`)
            .addField('**Reason:**', `${secondChunk}`)
            .addField('**Reported by:**', `<@${message.author.id}>`);
        channel.send(Embed);

    }

    if (message.content.startsWith('-warn')) {
        let user = message.mentions.users.first().id;
        const channel = client.channels.cache.find(channel => channel.id === '778396780089966632');
        let reason = message.content.slice(29, message.content.length);

        const Embed = new Discord.MessageEmbed()
            .setColor("RED")
            .addField('**Name:**', `<@${user}>`)
            .addField('**Action:**', 'Warn')
            .addField('**Reason:**', `${reason}`)
            .addField('**Reported by:**', `<@${message.author.id}>`);
        channel.send(Embed);

    }


    if (message.content.startsWith('>poll')) {
        message.delete({ timeout: 0 })
            .then(msg => console.log("\x1b[32m", `deleted message from ${msg.author.username}`))
            .catch(console.error);
        if (message.member.roles.cache.has('727646416834396171')) {
            title = message.content.slice(6, message.content.length);
            const Embed = new Discord.MessageEmbed()
                .setTitle(`${title}`)
                .setDescription(`✅ ==> Yes\n\n❌ ==> No`)
                .setColor("GREEN")
            return message.channel.send(Embed).then(Embed => {
                Embed.react('✅');
                Embed.react('❌');
            });
        } else {
            message.channel.send("You don't have the permission.")
        }
    }
    /*
        try {
            if (message.content.startsWith(">rep")) {
                let user = message.mentions.users.first().id;
                var readmessagefile = fs.readFileSync('./txt-files/rep.txt', 'utf-8');
                let result = readmessagefile.split(user).length - 1;
                console.log(result)
                message.channel.send(`<@${user}> has **${result}** points!`)
            }
    
            if (message.content.startsWith("+rep")) {
                let user = message.mentions.users.first().id;
                var readmessagefile = fs.readFileSync('./txt-files/rep.txt', 'utf-8');
                var writemessagefile = fs.writeFileSync('./txt-files/rep.txt', user + '\n' + readmessagefile);
                message.channel.send(`Added +1 rep to <@${user}>`);
            } else if (message.content.startsWith("-rep")) {
                let user = message.mentions.users.first().id;
    
                fs.readFile('./txt-files/rep.txt', 'utf8', function (err, data) {
                    var formatted = data.replace(user, '');
                    fs.writeFile('./txt-files/rep.txt', formatted, 'utf8', function (err) {
                        if (err) return console.log(err);
                    });
                });
                message.channel.send(`Removed -1 rep from <@${user}>`);
            }
        } catch (err) {
            
        }
    
    */

    if (message.content.startsWith(">yeet")) {
        let UserId = message.mentions.members.first().id;
        if (message.author.id === Salty || message.author.id === Octo || message.author.id === '466746088603516941' || message.author.id === '228652827814264832') {
            message.guild.member(UserId).voice.setChannel("727657781615657061");
            message.channel.send(`You've been yeeted from the voice channel`);
        }
    }

    if (message.content === '>winner') {
        cmdRandom.random(message);
    }

    if (message.content.startsWith('>id')) {
        if (message.member.roles.cache.has('727646416834396171') || message.member.roles.cache.has('727646559675614325') || message.member.roles.cache.has('766473163335925811') || message.member.roles.cache.has('783449006101495848')) {
            let id = message.mentions.users.first().id;
            message.channel.send(id);
        } else {
            message.channel.send("You don't have the permissions.");
        }

    }
    /*
        if (message.content.startsWith('>wallet add')) {
            cmdWalletAdd.wallet(message);
        }
    
        if (message.content.startsWith('>wallet open')) {
            cmdWalletShow.wallet(message);
        }
    */
    if (message.content.startsWith('>exec')) {
        cmdExec.exec(message);
    }

    

    if (message.content.startsWith('>scammer add')) {
        cmdScammerAdd.scammer(message);
    }

    if (message.content === '>scammers') {
        cmdScammersList.list(message);
    }

    if (message.content === '>status') {

        cmdStatus.status(message);
    }

    if (message.content === ">users") {
        cmdUsers.users(message);
    }

    if (message.content === '>help') {
        cmdHelp.help(message);
    }
 

    if (message.content === '>ping') {
        testfunction.test(message);
    }

    if (message.content === '>links') {
        cmdLinks.links(message);
    }



    if (message.content === '>bruh') {
        cmdBruh.bruh(message);
    }


    if (message.content === '>jokes') {
        cmdJokes.jokes(message);
    }

    if (message.content === '>kill') {
        cmdKill.kill(message);
    }

    if (message.content.startsWith('>slowmode')) {
        cmdSlowmode.slowmode(message);
    }

    if (message.content.startsWith('-mute')) {
        cmdMuteLog.log(message);
    }

    if (message.content.startsWith('-unmute')) {
        cmdunMuteLog.log(message);
    }

    if (message.content.startsWith('-warn')) {
        cmdWarnLog.log(message);
    }

    
/*
    if (message.content.startsWith('>logs')) {
        cmdSendLogs.logs(message);
    }
*/
    if (message.content.startsWith('>mutevoice')) {
        cmdMuteVoice.mute(message);
    }
    if (message.content === '>unmutevoice') {
        cmdUnMuteVoice.mute(message);
    }

    /*
    if (message.content === '>nuke') {
        if (message.member.roles.cache.has(adminId)) {
            cmdNuke.nuke(message);
        } else {
            message.channel.send("You don't have the permissions for that!")
        }
    }
    */
});


client.login('XXX');



