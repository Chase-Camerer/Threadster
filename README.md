# Slack Thread Bot
A bot that help put responses into a thread

## Install Guide

### Setup Development Environment
Install Slack Bolt by executing
```
npm install @slack/bolt
```

## **Automated Testing**

Run test by running `npm test`.

If you get this error first run `npm install`.

> 'jest' is not recognized as an internal or external command, operable program or batch file.

To transcompile app.ts to app.js use this command 'tsc --esModuleInterop app.ts'

'await say(JSON.stringify(message));' can be used to see the entire output of a slack message

## Manual Testing
https://api.slack.com/start/distributing#single_workspace_apps

1. set up eviromental variables
   1. `export SLACK_SIGNING_SECRET=(signing secret)`
   2. `export SLACK_BOT_TOKEN=(apps xoxb)`
   3. `export SLACK_APP_TOKEN=(Bots app token)`
2. run in terminal "node app.js"
3. run 'tsc --esModuleInterop app.ts' to transcompile app.ts to app.js

## **Errors**

> - throw new errors_1.AppInitializationError('You must provide an appToken when socketMode is set to true.
To generate an appToken see: https://api.slack.com/apis/connections/socket#token'); 

If you get this error do step 1-iii.
If you have trouble finding the appToken it can be found in the apps Settings -> Basic Information -> App-Level Tokens -> any Token Name

> - throw new errors_1.AppInitializationError(\`${tokenUsage} \n\nSince you have not provided a token or authorize, you might be missing one or more required oauth installer options.
See https://slack.dev/bolt-js/concepts#authenticating-oauth for these required fields.\n\`);

If you get this error do step 1-ii.
if you cant find the the apps xoxb you can find in Featurs -> Oauth & Permissions -> OAuth Tokens for Your Workspace

> - No Bash Terminal
   1. Intall Git
   2. open VS Code and press Ctrl + `
   3. open the command palette using ctrl + shift + p
   4. Type - Select Default Profile
   5. Select Git Bash from the options
   6. Click on the + icon in the terminal window
   Link for more help: https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal

> - 'jest' is not recognized as an internal or external command, operable program or batch file.
   ```
   npm install --save-dev jest
   ```
