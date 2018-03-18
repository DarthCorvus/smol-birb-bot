const Discord = require('discord.js');
const bot = new Discord.Client();
const Prefix = "^~^ ";

var penny = [
  "Dad daddio diddly dab dabs while dading!",
  "You're outwife-ing me, now!",
  "'elp me, ya fook!",
  "HAH IM AN DUNUSOOR!",
  ];

bot.on('ready', () => {
  console.log('I am ready!');
  });
  
bot.on('message', message => {
  
  if (message.author.equals(bot.user)) return;
  
  if (message.content === "^~^") {
      message.channel.sendMessage("^~^");
      return;
  }
  
  if (!message.content.startsWith(Prefix)) return;
  
  var args = message.content.substring(Prefix.length).split(" ");
  
  switch (args[0].toLowerCase()) {
    case "cheep!":
        message.channel.sendMessage("Chirp! ^~^");
        break;
    case "info":
        message.channel.sendMessage("Oh haiiiii!!! I'm Smol Birb, your local chirper and cheeper! I can't do much right now, but Corvus and I are hard at work trying to fix that! If you have any suggestions, please keep them to yourself! xD Lol jk we would love to hear your input. Feel free to DM @DarthCorvus#7351 with any suggestions for making me better. Thanks! ^~^");
        break;
    case "penny for your thoughts?":
        message.channel.sendMessage(penny[Math.floor(Math.random() * penny.length)]);
        break;
    default:
        message.channel.sendMessage("Ummm... >.< I'm sorry! I don't know that one! Do you, uh... Want to try a different one?");
        break;
  }
  
});
bot.login(process.env.BOT_TOKEN);
