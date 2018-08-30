const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const bot = new Discord.Client();

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online`);
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    //The below allows for arguements to be seperated after the command.
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd == `${prefix}hello`){
        return message.channel.send("Hello!");
    }

});

bot.login(botconfig.token);