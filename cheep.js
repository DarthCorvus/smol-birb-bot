const Discord = require('discord.js');
const bot = new Discord.Client();
const Prefix = "; ";

var penny = [

    "Dad daddio diddly dab dabs while dading!",
    "You're outwife-ing me now!",
    "'elp me, ya fook!",
    "HAH IM AN DUNUSOOR!",
    "She protecc, she attacc, but most importantly, she cuddle bacc :bread:",
    "Don't listen to Chika! Corvus isn't a masochist OR a stalker!",
    "Okay so Corvus miiiiiiight be a stalker...",
    "I will hot you!",
    "Here's to cheating, stealing, fighting, and drinking!",
    "Get moar blanket!",
    "Dakota is still grounded.",
    "Hugo am belongs to Ando!",
    "Hugo is stupid at random times of the day.",
    "I dindu nuffin'!",
    "Ando wuvs u, Hugo! ^~^",
    "Ayana is *always* here O.O",
    "**PRAISE THE MOTHER!**",
    "Incest ≠ Wincest",
    "Don't tell me how to love my lofe!",
    "*All hail S'ahkz*",
    "I'm on PROBATION!",
"Pyro disconnected. Again.",
"Ich bin geil!",
"Cthulhu is a sexy firefighter!",
"Beware the 18+ Only caramel candies!",
"Chika's not gonna say those foul words no more!",
"Pickly wrinkly dingily winkily!",
"Something something I'm Dwayne Johnson.",
"Luv yiy, I drinj!",
"Jow du I hert!",
"U neaddbhrlpp!",
"***PROTECT YOUR PICKLE***",
"I've been out-dadded :shock:",
"HuDo4lief!",
"#makehugogayagain",
"I'm going to yeet on your dreams!",
"Hugo's spirit animal is the Swooly Mammoth!",
"The Circle is full of lewdy lewders -_-",
"Hugo is ok.",
"Everybody wants to be a Scott!",
"That was art but in the worst way :horror:",
"/tts I'm an attack hellicopter! @@@@@@@@@@@@@@@@@@@@@@@@@@@@",
"Kill all the humans!",
"Vlad is Ayana's bitch!",
"Tatsu is a dirty liar!",
"Probation is just a drug for Al.",
"Roots? I thought we were birds not plants :Hehe:",
"WHY WOULD YOU **COOK** THE TACO ONTO HIM?!",
"GROCLE HAS BOOBS!",
"It's okay ^~^ I've learned how to control my powers.",
"Grockle is *always* shirtless O.O",
"Is a body roll sort of like a grapple check? :thinking:",

bot.on('ready', () => {
  console.log('I am ready!');
  });
  
bot.on('message', message => {
  
  if (message.author.equals(bot.user)) return;
  
  if (!message.content.startsWith(Prefix)) return;
  
  var args = message.content.substring(Prefix.length).split(" ");
  
  switch (args[0].toLowerCase()) {
    case "cheep!":
        message.channel.send("Chirp! ^~^");
        break;
    case "info":
        message.channel.send("Oh haiiiii!!! I'm Smol Birb, your local chirper and cheeper! I can't do much right now, but Corvus and I are hard at work trying to fix that! If you have any suggestions, please keep them to yourself! xD Lol jk we would love to hear your input. Feel free to DM @DarthCorvus#7351 with any suggestions for making me better. Thanks! ^~^");
        break;
    case "pins":
        message.channel.send(penny[Math.floor(Math.random() * penny.length)]);
        break;
    default:
        message.channel.send("Ummm... >.< I'm sorry! I don't know that one! Do you, uh... Want to try a different one?");
        break;
  }
  
});
bot.login(process.env.BOT_TOKEN);
