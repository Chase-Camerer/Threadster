import  { App } from  '@slack/bolt';

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: +(process.env.PORT || 3000)
});

// Listens to incoming messages
app.message(async ({ message, say }) => {
const message2=message as any;
  if (message2.text.length < 20) {
      // say() sends a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `Should this message be in thread of the previous message?`
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "8"
            },
            "action_id": "button_click"
          }
        }
      ],
      text: `Should this message be in thread of the previous message?`
    });
  }
});

app.action('button_click', async ({body, ack, say}) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  
  console.log('⚡️ Bolt app is running!');
})();