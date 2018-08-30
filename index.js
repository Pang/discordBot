const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`);
})

bot.login(botconfig.token);