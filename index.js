const discord = require ("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <=0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) =>{

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is ingeladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.on("ready", async () => {

    console.log(`${client.user.username} bot is online.`);
    client.user.setActivity("BrokeMT | Creator: Thomasjuhhh#0001"); //, {type: "Watching"}
    
});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if(!message.content.startsWith(prefix)) return;

    if(commands) commands.run(client, message, arguments);

    //if(command === `${prefix}hallo`){
        //return message.channel.send("Hallo!")
    //}
    

     //if(command === `${prefix}hallo`){
        //return message.channel.send("Hallo!")
    //}

    if (command === `${prefix}info`) {
        
        var botEmbed = new discord.MessageEmbed()
            .setTitle("**__BrokeMT__**")
            .setDescription("BrokeMT is een leuke community die altijd voor je klaar staat. Zoals je het al hebt gehoord is het een OP-MT/Normale-MT want wij willen elke speel ervaring mee leven aan mensen die net spelen. Je kan een winkeltje starten, bij staatsbedrijven werken of je neemt het verkeerde pad.")
            .setColor("#ff0028")
            .addFields(
                {name: "**__Websites__**", value: ":electric_plug:  Store: https://store.brokemt.nl, :hammer:  Ip: play.brokemt.nl, :satellite: Website: https://brokemt.nl"},
                {name: "**__Producer van BrokeMT bot__**", value: "Thomasjuhhh#0001 op YouTube ThomsenGaming"},
                {name: "**__Members:__**", value: message.guild.memberCount},
                {name: "**__Je bent gejoined op:__**", value: message.member.joinedAt}
            )
            .setThumbnail("https://i.gyazo.com/8b4eae3079a445dec8fce5fedaebcb63.png")
            .setFooter("© BrokeMT | 2021 | alle rechten voorbehouden.")
 
         return message.channel.send(botEmbed);
     }
     
    if (command === `${prefix}serverinfo`) {
        
        var botEmbed = new discord.MessageEmbed()
            .setTitle("**__BrokeMT__**")
            .setDescription("BrokeMT is een leuke community die altijd voor je klaar staat. Zoals je het al hebt gehoord is het een OP-MT/Normale-MT want wij willen elke speel ervaring mee leven aan mensen die net spelen. Je kan een winkeltje starten, bij staatsbedrijven werken of je neemt het verkeerde pad.")
            .setColor("#ff0028")
            .addFields(
                {name: "**__Websites__**", value: ":electric_plug:  Store: https://store.brokemt.nl, :hammer:  Ip: play.brokemt.nl, :satellite: Website: https://brokemt.nl"},
                {name: "**__Producer van BrokeMT bot__**", value: "Thomasjuhhh#0001"},
                {name: "**__Totaal members__**", value: message.guild.memberCount}
            )
            .setThumbnail("https://i.gyazo.com/8b4eae3079a445dec8fce5fedaebcb63.png")
            .setFooter("© BrokeMT | 2021 | alle rechten voorbehouden.")
 
         return message.channel.send(botEmbed);
         
     }
     
     if (command === `${prefix}creator`){
         return message.channel.send("Creator: Thomasjuhhh#0001")
     }

});

client.login(process.env.token);