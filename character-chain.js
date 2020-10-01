/**
 * Required libraries
 */
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


/**
 * Declaring variables
 */
let chainNum = undefined;
let chainStr = undefined;
let chainMsg = undefined;


/**
 * Reading 'token.txt' and 'chainNum.txt' 
 * and outputting its data
 */
fs.readFile('token.txt', 'utf8', function (err, data) {
    if (err) throw err;
    client.login(data);
});


function readChainNum() {
    fs.readFile('chainNum.txt', 'utf8', function (err, data) {
        if (err) throw err;
        chainNum = Number(data);
    });
}

readChainNum();


/**
 * Startup actions
 */
client.on('ready', () => {

    /**
     * Variable assignment
     */
    chainStr = '?';
    chainMsg = chainStr.repeat(chainNum);

    /**
     * Logging all variable information
     */
    console.log(chainStr);
    console.log(chainNum);
    console.log(chainMsg);

    /**
     * Logging Discord tag and setting the bot's status
     */
    const myName = client.user.tag;
    console.log(`Success, logged in as: ${myName}`);

    client.user.setActivity("Long live the chain!");
});



/**
 * If the correct chained message is sent in the #general channel
 * add one to the 'chainNum' variable and rewrite the 'chainNum.txt'
 * file to contain the new number.
 * 
 * Else, delete the incorrect chained message and DM the user telling
 * them the correct number of chained characters and showing them a
 * preview of the correct chained message.
 */
client.on('message', async message => {

    if (message.channel.name === 'general' && message.content === chainMsg) {
        
        readChainNum();
        chainNum++;
        chainMsg = chainStr.repeat(chainNum);

        fs.writeFile('chainNum.txt', chainNum.toString(), 'utf8', (err) => {
            if (err) throw err;
        });

        console.log(chainStr);
        console.log(chainNum);
        console.log(chainMsg);

    } else {

        if (message.system) return;

        message.channel.bulkDelete(1);

        if (message.author.bot) return;

        else {
            await message.author.createDM();
            await message.author.dmChannel.send(`Don't ruin the chain!!! The next number of ${chainStr}'s is ${chainNum}.` + "\n" + `(${chainMsg})`);
        }
    }
});
