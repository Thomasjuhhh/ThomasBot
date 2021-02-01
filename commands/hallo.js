const discord = require ("discord.js");

module.exports.run = async(client, message, args) => {

    return message.channel.send("Hey hoi!")

}

module.exports.help = {
    name: "hallo",
    description: "Zeg hallo",
    category: "Informatie",
    aliases: []
}