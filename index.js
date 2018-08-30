const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const bot = new Discord.Client();

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online`);
})

bot.on('message', msg => {
    if (msg.content == "ping"){
        msg.reply("Pong!");
    }
})

bot.login(botconfig.token);