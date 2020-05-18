Custom Integrations Tutorial
============================

Adding a custom integration to Mugsy is a very simple process. In the following tutorial, we will create a Discord Bot that will allow you to brew coffee directly from your favorite Discord Channel.

The app is written in Node.JS. You can find out how to install Node on your specific set up here: [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

I will not get into much detail about Node itself nor will there be any in depth code descriptions. There are tons of great Node tutorials all over the web for that. Some minor Googling will get you moving very quickly. That being said, once Node is installed, you will not need anything beyond this tutorial to get the bot up and running.

Sections
--------

There are four main sections to this tutorial:

*   Setting up the dev environment
    
*   Mugsy Key Generation
    
*   Coding the App
    
*   Creating the Discord Bot
    

Set Up
------

_This tutorial is written from the perspective of those using a Unix style terminal app. If you do not have one on your system of choice, you may need to translate these commands._

In your working directory type the following commands:

1.  Create a new directory for your app: **_mkdir mugsyBot_**
    
2.  Enter the new directory: **_cd mugsyBot_**
    
3.  Initialize the directory to work with Node: **_npm init -y_**
    

Node’s most powerful feature is its use of packages. Packages are libraries you can use to quickly add functionality to your app.

This app will use two packages and they are installed using NPM(Node Package Manager):

*   **Discord.JS**: A powerful library for interacting with the Discord API
    
*   **Request**: Request is designed to be the simplest way possible to make HTTP calls. It supports HTTPS and follows redirects by default.
    

To install the packages enter the following commands in your terminal:

1.  **_npm install discord.js_**
    
2.  **_npm install requests_**
    

Finally, create a new file and name it **index.js.**

Mugsy Key Generation
--------------------

*   Access Mugsy Cloud Control at [https://cloud.heymugsy.com](https://cloud.heymugsy.com)
    
*   Scroll down to the integrations tabs and click on Custom Integration:
    

![Screen+Shot+2019-05-08+at+8.25.42+PM.jpg](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557369705635-WLUPHSXUD3ORG0LYMT6E/ke17ZwdGBToddI8pDm48kMcTyXlylfQy0JbEDUoEo1N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmUK_IB3X7lRAWenxoBFomxemwY-AOXNaqU9Kd_wXST22GPQ9jHP9TW7rcS2T-6s-f/Screen%2BShot%2B2019-05-08%2Bat%2B8.25.42%2BPM.jpg)

The settings are:

*   **Integration Name**: This can be whatever you want.
    
*   **Type**: Select Coffee Now. This integration just causes the Coffee Now function to fire form Discord.
    
*   **User**: Which user’s Coffee Now settings you want to fire off.
    

Once you have everything filled out, hit the submit button to get your key:

![Screen Shot 2019-05-08 at 8.28.14 PM.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557367101819-VVAF7WBWYODZ9WM766NF/ke17ZwdGBToddI8pDm48kKuEVib_B0z14WOkpj5pGjxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PISR0Dc2KFYCKUUezwZ779Ja9IXpfsfHAGC5QO71xG8PQ/Screen+Shot+2019-05-08+at+8.28.14+PM.png)

Copy that key and put it somewhere safe! We will need it in the next section.

Code
----

Open up your favorite text editor with the **index.js** file we created in the first section.

The first thing we need to do is to import the packages we installed earlier:

![code1.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557367248476-IMQPYNA025IXQBOHPJ4Q/ke17ZwdGBToddI8pDm48kJYduKvjWkmpup8mk1yq9RYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc3qCY16Bac5Ah6kwlLTJXt64GHOL2QffRhsIDTj1zNZQPxBZ78JUCc64QjFUwFyDF/code1.png)

The first line imports the Discord.JS package and the second prepares a new instance of the Discord client. The third line imports the Request package.

Next we will create the actual client for the Discord connection:

![code2.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557367456996-P5L8VJ6VZ91P8QZR98UY/ke17ZwdGBToddI8pDm48kF5pclQo8dPaT6gbLML5WUQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjxIGHNmc6vQ4Z6QI181yoDKfHLGXfHMi3C8g9DTvZAIMW89k1YQd91nIB2t4H5GG/code2.png)

Once connected, it logs the Discord user to the terminal.

Next we get to the bulk of the app:

![code3.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557367705851-DXUFPTYW8WB59DDUI46X/ke17ZwdGBToddI8pDm48kGTWiXfZ4vNLU8irDoAmzioUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dqjWV-aABg2_9lAWnFGdqkAtf84iGOkVR1HKm_BKkPNWCjLISwBs8eEdxAxTptZAUg/code3.png)

*   **msg.content** is the trigger that the Discord Bot listens for. I have set it to listen for “Mugsy Brew!”. So any time I type “Mugsy brew!” the bot will fire off the function. You can use anything you want here.
    
*   The cloud.heymugsy.com url is the endpoint for custom integrations. This is where you will paste the key you generated from the Custom Integration form in the previous section.
    
*   The remaining function logs any errors from the cloud.heymugsy.com endpoint as well as the returned status code.
    
*   **msg.reply(body)** is then sent directly to the Discord Bot, which replies to the initial trigger command in the Discord channel. The message content is the “body” from the Mugsy endpoint. It will return “Mugsy is brewing your coffee!” if your system is online and ready to go. If not, it will return an error message.
    

Creating the Discord Bot
------------------------

Head on over to [https://discordapp.com/developers/applications/](https://discordapp.com/developers/applications/) to create a new Discord App. You will need to be logged in under your existing user. Click the New Application button to get started:

![Discord Developer Portal — My Applications.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557369353194-8OBL6AZOB59OCTOZ4O1P/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/Discord+Developer+Portal+%E2%80%94+My+Applications.png)

Next, think of a good name for your bot:

![Discord Developer Portal — My Applications (1).png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557369418364-Y1AFQE9WPJZ71FY944Q0/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/Discord+Developer+Portal+%E2%80%94+My+Applications+%281%29.png)

Hit **create**, and you will be taken to your new app’s settings:

![Discord Developer Portal — My Applications (2).png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557369484957-74NMCYZ4PPUYU4OKZ15R/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/Discord+Developer+Portal+%E2%80%94+My+Applications+%282%29.png)

There’s some juicy info here but we do not need it for this app so we’re gonna ignore it for now. We need to now create the actual bot for this new app. In the left side menu, click on the “**Bot**” link.

![Discord Developer Portal — My Applications (3).png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557369626404-XQTO9SJRLNZ4J4S1JNAZ/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/Discord+Developer+Portal+%E2%80%94+My+Applications+%283%29.png)

Click on the “Add Bot” button on the right hand side. From there you will get a confirmation screen:

![Discord Developer Portal — My Applications (4).png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557369791548-C8NZ3NUWD8TCF1AZ0A0P/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/Discord+Developer+Portal+%E2%80%94+My+Applications+%284%29.png)

Click yes to confirm. From there, we will need to update the security settings for the bot. From the left hand side menu, click on OAuth.

![Discord Developer Portal — My Applications (5).png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557369899910-01FW2CU2CH4TUGEJ9RSI/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/Discord+Developer+Portal+%E2%80%94+My+Applications+%285%29.png)

In the **Scopes** section, select “**bot”**. A link will appear. You need to visit this link to activate the bot and install it on your Discord Server:

![222.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557370148235-Z637CSOKRTGVOAXAC56M/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/222.png)

If you do not have your own Discord server, open up the regular discord app. Click the + sign from the left side menu:

![3333.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557370304460-OJQMMEZIZZ5IEJ548UHN/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/3333.png)

From there, select “Create” on the next screen:

![1111.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557370375792-WWB0258J7C85E322IOH7/ke17ZwdGBToddI8pDm48kGz8d67UD4wuVIS2ijUDs4EUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc_xQ9CGaIBCne9p1y8ym8w9wQwst351A1oqMg7ua7acHhzZ1nNlG3HfJwJ_vIEaq6/1111.png)

Once your server is live, go back to the link from OAuth screen’s Scope section, select the new server’s name and confirm.

Your Discord Bot is now alive and ready to go. The last step is to grab the bot’s OAuth key and add it to the index.js file so they can actually communicate. Back in the Discord Developer Portal, click on “**Bot”** from the left hand menu:

![Discord Developer Portal (1).png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557370714428-30F6D8SQ1LOTY1TY5KBS/ke17ZwdGBToddI8pDm48kHhA51uBkJ9O5vIzY5CH9rEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcC1PoWyNUGRqnBettanOXLzlxHFmdYB6pt-dq5GLMRzhvfNThqKA3fsI8DXGi2rmP/Discord+Developer+Portal+%281%29.png)

In the Token section, hit the copy button to push the key to your clipboard.

Head back to your text editor and add the following line to the end of the **index.js** file:

![code4.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557370904036-UF25AIHOQ7UTWDOQSNPM/ke17ZwdGBToddI8pDm48kOdmqHgEYSpn_3FNueQlP9QUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtWeRhmBa0US1URbtnx7dsH07YC8iTx1vhiQD4yB2wUyCjLISwBs8eEdxAxTptZAUg/code4.png)

Paste the copied key over DISCORD\_BOT\_KEY\_HERE. And that’s pretty much it! Save your file. Open up your terminal and make sure you are in the project directory.

To start the app type: **node index.js**

Hit enter. If everything went well, you should see this in the terminal: Logged in as: mugTest#4994!

The user will be your bot’s name and number so it won’t be exactly the same. Just make sure you aren’t seeing any errors.

OK, now it’s time to test! Open up your discord app to your server and check the top right corner for logged in users. You should see your bot hanging out:

![Screen Shot 2019-05-08 at 11.10.20 PM.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557371476649-WWWHCNA9L0CONFVU7L2I/ke17ZwdGBToddI8pDm48kK73yyuJ87a1XSkdqhdpznRZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7TNdqww6z_61iXx7yO_mnkpQmIfH2BpW4mGsygTp3GFS7_IFPWeWx4CpCPLgC9q8Ug/Screen+Shot+2019-05-08+at+11.10.20+PM.png)

Now, since Mugsy is just barely starting to ship, your machine won’t be online and your bot will respond with an error:

![Screen Shot 2019-05-08 at 11.10.02 PM.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557371813635-F44QJBFDXUXLBP1N4Q0F/ke17ZwdGBToddI8pDm48kJN3EFBHbYT_4f717P5vIQxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITRihEpT6Pb-5Cfl-RhgDemhsOHVNdVTKpBwVAEwgDGY/Screen+Shot+2019-05-08+at+11.10.02+PM.png)

Here is what a successful response looks like:

![Screen Shot 2019-05-08 at 11.18.09 PM.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557371908822-XG0QASFXO51P2DG9SNUA/ke17ZwdGBToddI8pDm48kP3O7cEwTyjnsxvEwrJgAWBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyHTZ540KzbyC2SfhAkuyBpil1cCaz35xDjQ9D7lgN-czJ8YJqucADmb23EwA4ocuE/Screen+Shot+2019-05-08+at+11.18.09+PM.png)

All done! Here is a shot of all the code:

![codeALL.png](https://images.squarespace-cdn.com/content/v1/55f8db72e4b0219d1ebd9acc/1557371997234-HLENQCOVFMEQETQABHPE/ke17ZwdGBToddI8pDm48kLx6H2fklkKU9yanlRhmNot7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZ-tIkU3EZboOiMryQ2ZX1jwOacXKzmrr8YDlGha-GbCoRwB-dUGsSquCnVTFQcaRg/codeALL.png)

You can find all of the code on Github, ready to go: [https://github.com/margyle/mugsy-discord-bot](https://github.com/margyle/mugsy-discord-bot)

Thanks for taking the time to read this tutorial! It is the first of many more to come.  Feel free to share comments and corrections!

Cheers,

\-m
