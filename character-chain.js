/**
 * Required libraries
 */
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { send } = require('process');


/**
 * Declaring variables --don't change--
 */

let chainNum = undefined;
let chainStr = undefined;
let chainMsg = undefined;
let textChannel = undefined;


/**
 * Reading 'config.txt'
 * and outputting its data
 */

function readConfig() {
    fs.readFile('config.txt', 'utf8', function (err, data) {
        if (err) throw err;
        const lines = data.split(/\r?\n/);

        chainNum = Number(lines[0]);
        chainStr = lines[1];
        textChannel = lines[2];

        client.login(lines[3]);
    });
}

readConfig();


/**
 * Startup actions
 */
client.on('ready', () => {

    /**
     * Variable assignment
     */

    chainMsg = chainStr.repeat(chainNum);

    /**
     * Logging all variable information
     */
    console.log(`chainStr = ${chainStr}`);
    console.log(`chainNum = ${chainNum}`);
    console.log(`chainMsg = ${chainMsg}`);
    console.log(`textChannel = ${textChannel}`);

    /**
     * Logging Discord tag and setting the bot's status
     */
    const myName = client.user.tag;
    console.log(`Success, logged in as: ${myName}`);

    client.user.setActivity("Long live the chain!");

});



/**
 * If the correct chained message is sent in your text channel
 * add one to the 'chainNum' variable and rewrite the 'config.txt'
 * file to contain the new number.
 * 
 * Else, delete the incorrect chained message and DM the user telling
 * them the correct number of chained characters and showing them a
 * preview of the correct chained message.
 */
client.on('message', async message => {

    if (message.channel.name === textChannel && message.content === chainMsg) {
        
        chainNum++;
        chainMsg = chainStr.repeat(chainNum);

        fs.writeFile('config.txt', `${chainNum.toString()}\n${chainStr}\n${textChannel}`, 'utf8', (err) => {
            if (err) throw err;
        });

        console.log(`chainStr = ${chainStr}`);
        console.log(`chainNum = ${chainNum}`);
        console.log(`chainMsg = ${chainMsg}`);

    } else {

        if (message.channel.name === textChannel && message.system === false) {
        message.channel.bulkDelete(1);
        
            if (message.author.bot) return;

            else {
                await message.author.createDM();
                await message.author.dmChannel.send(`Don't ruin the chain!!! The next number of ${chainStr}'s is ${chainNum}. \n (${chainMsg})`);
        }}
    }
});
