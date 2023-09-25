# Slack Thread Bot
A bot that help put responses into a thread

## Install Guide

### First Time
1. Copy and paste this to download
```
npm install @slack/bolt
```
### Every Time

2. set up eviromental variables
   1. `export SLACK_SIGNING_SECRET=(signing secret)`
   2. `export SLACK_BOT_TOKEN=(apps xoxb)`
   3. `export SLACK_APP_TOKEN=(Bots app token)`
3. run in terminal "node app.js"

## **Errors**

> - throw new errors_1.AppInitializationError('You must provide an appToken when socketMode is set to true.
To generate an appToken see: https://api.slack.com/apis/connections/socket#token'); 

If you get this error do step 2-3.
If you have trouble finding the appToken it can be found in the apps Settings -> Basic Information -> App-Level Tokens -> any Token Name

> - throw new errors_1.AppInitializationError(`${tokenUsage} \n\nSince you have not provided a token or authorize, you might be missing one or more required oauth installer options.
See https://slack.dev/bolt-js/concepts#authenticating-oauth for these required fields.\n`);

If you get this error do step 2-2.
if you cant find the the apps xoxb you can find in Featurs -> Oauth & Permissions -> OAuth Tokens for Your Workspace
