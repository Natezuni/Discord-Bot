const { DiscordAPIError } = require('discord.js');
const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    play: function (message) {
        
        message.member.voice.channel.join()
        .then(connection => console.log('connected'))
        .catch(console.error);

        const dispatcher = connection.play("C:\Documents\Projects\DiscordBot\audio\test.mp3");
        dispatcher.on('start', () => {
            console.log('audio.mp3 is now playing!');
        });
        
    }
}