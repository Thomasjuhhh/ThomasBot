const discord = require("discord.js");

exports.run = async(client, msg, args) => {

    function doMagic8BallVoodoo() {
        var rand = ['**Jazeker ;)**', '**Nahhh :( **', '**Geen idee :|**'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }

    {
        msg.channel.send(':8ball: Antwoord: ' + doMagic8BallVoodoo());
    }

}

module.exports.help = {
    name: "8ball",
    description: "Speel 8ball",
    category: "Algemeen"
}