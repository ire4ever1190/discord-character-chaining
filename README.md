# Discord Character Chaining

A simple Discord bot that only allows "chained messages" in a desired channel.

## Introduction

Have you ever experienced a friend type a symbol or phrase, and then someone else 1-up's your friend with two?
Then another person comes along and 1-up's that person's two with three, and then four, then five... etc.


### But, then some *idiot* comes along and ruins your fun typing something different forcing everyone to start over.

Well, if you are such an individual, you've come to the right place, because this Discord bot **WILL NOT LET YOU**
~~(or your dumb friend)~~ type **anything** besides the next quantity of your symbol or phrase!


# Setup

The setup for this Discord bot will be divided into two steps: [creating the Discord bot](https://github.com/FSV-Venom/discord-character-chaining/new/master?readme=1#creating-the-discord-bot) and [configuring the code](https://github.com/FSV-Venom/discord-character-chaining/new/master?readme=1#configuring-the-code).

## Creating the Discord Bot

If you have not previously been through the process of creating a Discord bot, I would recommend watching a tutorial on [YouTube](https://www.youtube.com/results?search_query=how+to+make+a+discord+bot).
Although, it is not that complicated.

### A quick explanation of the process:

  - Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application. Enter a name for your bot, and then click on the "Bot" tab. Click "Add Bot." Keep this tab open for the next steps.

## Configuring the Code

Assuming you've already downloaded the files, (download them now if you haven't!) open the .zip folder, unzip it, and open **character-chain.js**

  - On line 45 (as of 9/30/2020) you will see the chainStr variable, change the '?' that is inside of the quotes to whatever symbol or phrase you want to be chained.

Note: Make sure that you LEAVE THE QUOTES surrounding your symbol or phrase. |
---------------------------------------------------------------------- |

  - On line 77 in the "if" where you see ```message.channel.name === 'general'```, change 'general' to the name of the channel that your chain is located.
 
#### Note: Do not include the '#' at the beginning of your channel's name in the code.
Good Name | Bad Name
-----|----
```message.channel.name === 'chain-spam'``` | ```message.channel.name === '#chain-spam'```

Next, open chainNum.txt. This is the file that stores the number of times your symbol or phrase should be repeated.

  - Set the number in chainNum.txt to the number of repititions that your chain is currently on.
If you're starting a new chain, set this number to one. Everytime the correct chain message is sent, the bot will add one to token.txt, so there is no need to change chainNum.txt after it has been set (unless you're creating a new chain).

The last step is inserting your Discord bot's token into token.txt.

  - Find your bot on the [Discord Developer Portal](https://discord.com/developers/applications), and make sure that you're on the "Bot" tab. Directly below the bot's username, you will see the bot's token. Copy the token and paste it into token.txt in the bot's directory.

WARNING: DO NOT SHARE YOUR TOKEN WITH ANYONE, AS ANYONE WITH THE BOT'S TOKEN CAN FORCE THE BOT TO EXECUTE THEIR OWN CODE. |
------------------------------------------------------------------------------------------------------------------------- |

If you accidentally leak your bot's token, simply head over to the Discord Developer Portal, and regenerate the bot's token, then repeat the previous step.

# Running the Bot

You're finished creating the bot and configuring the code, now it's time to **ACTIVATE** the bot.

  - Download and install [node.js](https://nodejs.org/en/download/).

  - If you're in an IDE with an intigrated terminal, simply open a new terminal and type: ```node character-chain.js```

  - If you're not using an IDE, open the OS's terminal app and type: ```cd path/to/the/bot/```. After you're in the correct directory, type: ```node character-chain.js```.

If you did everything correctly, the terminal should output:
```
chainStr
chainNum
chainMsg
Success, logged in as: Your-Bot#1234
```
Where 'chainStr' is the symbol or phrase of your choosing. e.g. ?.
And where 'chainNum' is the number from chainNum.txt e.g. 5.
And where 'chainMsg' is the preview of the next chain message e.g. ?????.

As people continue the chain, the bot will output this same message, but with updated variables, e.g. 'chainNum' would be 6 instead of 5.


# Success!

Congratulations! Your chain is now secure! No longer will trolls mess up your chains inside of Discord!
