require('dotenv').config();

const discord = require("discord.js");
const client = new discord.Client();

var envArray = ["Forest", "Supermarket", "Medieval Castle", "Ocean", "Jungle", "Cave", "City", "Farm", "Beach", "Digital", "Space", "Anime", "Oriental", "SciFi"];
var genreArray = ["FPS", "Action RPG", "Turn RPG", "Visual Novel", "Top-Down Shooter", "Platformer", "Soccer", "Strategy", "Adventure", "Simulation", "Idle Clicker", "Race", "Metroidvania", "Text-Based", "Multiplayer", "Rythm", "Tower Defense"];
var goalArray = ["Save the Princess", "Gather Resources", "Destroy All Objects on the Screen", "Kill All the Enemies", "Become Rich", "Punish the Traitors", "Die", "Do Literally Nothing", "Do Literally Everything", "A Bootleg Better than the Original", "Conquest a Nation", "Beat the Record"];

client.on("ready", () => {
    console.log(`Logged as: ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (!msg.author.bot) {
        if (msg.content == "-gameidea") {
            var ideaString = generateNewIdea();
            msg.channel.send(ideaString);
        }

        if (msg.content == "-enviro") {
            msg.channel.send(envArray.toString());
        }

        if (msg.content == "-genres") {
            msg.channel.send(genreArray.toString());
        }

        if (msg.content == "-goals") {
            msg.channel.send(goalArray.toString());
        }
    }
});

function generateNewIdea() {
    let envRandom = envArray[Math.floor(Math.random() * envArray.length)];
    let genreRandom = genreArray[Math.floor(Math.random() * genreArray.length)];
    let goalRandom = goalArray[Math.floor(Math.random() * goalArray.length)];

    return (`:palm_tree: **Environment:** ${envRandom} \n:joystick: **Genre:** ${genreRandom} \n:dart: **Goal:** ${goalRandom}`);
}

client.login(process.env.TOKEN);
