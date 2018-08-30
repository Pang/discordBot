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

    if (cmd == `${prefix}botinfo`){
        let botEmbed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("2d998c")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Bot Name", bot.user.username)
        .addField("DoB", bot.user.createdAt);

        return message.channel.send(botEmbed);
    }

    if (cmd === `${prefix}serverinfo`){
        let serverEmbed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("2d998c")
        .setThumbnail(message.guild.displayAvatarURL)
        .addField("Server Name", message.guild.name)
        .addField("Created on", message.guild.createdAt)
        .addField("You joined", message.member.joinedAt)
        .addField("Total members", message.guild.memberCount);

        return message.channel.send(serverEmbed);
    }

});

bot.login(botconfig.token);