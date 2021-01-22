require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged as: ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (!msg.author.bot) {
        if (msg.content == "-gameidea") {
            var ideaString = generateNewIdea();
            msg.channel.send(ideaString);
        }

        if (msg.content == "-credits") {
            msg.channel.send(":point_right: https://caueh.itch.io/ :point_left:")
        }
    }
});

var envArray = ["Forest", "Supermarket", "Medieval Castle", "Ocean", "Jungle", "Cave", "City"];
var genreArray = ["FPS", "Action RPG", "Turn RPG", "Visual Novel", "Top-Down Shooter", "Platformer", "Soccer", "Strategy", "Adventure", "Simulation"];
var goalArray = ["Save the Princess", "Gather Resources", "Destroy All Objects on the Screen", "Kill All the Enemies"];

function generateNewIdea() {
    let envRandom = envArray[Math.floor(Math.random() * envArray.length)];
    let genreRandom = genreArray[Math.floor(Math.random() * genreArray.length)];
    let goalRandom = goalArray[Math.floor(Math.random() * goalArray.length)];

    return (`:palm_tree: **Environment:** ${envRandom} \n:joystick: **Genre:** ${genreRandom} \n:dart: **Goal:** ${goalRandom}`);
}

client.login(process.env.TOKEN);
