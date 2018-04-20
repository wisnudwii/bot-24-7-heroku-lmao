const discord = require('discord.js');
const bot = new DiscordAPIError.client();

const prefix = '*';

bot.on('message',message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont =message.content.clice(prefix.lengh).split("");
    let args = cont.slice(1);

    if (msg === prefix + 'PING') {
        message.channel.sent('PONG');
        return;
    }

})

bot.on('ready',() => {
    console.log('WINGGGGGG!');
});

bot.login('process.env.BOT_TOKEN');
