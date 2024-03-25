import  { App } from  '@slack/bolt';
import { isSmall } from "./size"
import { isQuick } from "./time"

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

function hasOwnProperty<X extends {}, Y extends PropertyKey>
  (message: X, text: Y): message is X & Record<Y, unknown> {
  return message.hasOwnProperty(text)
}

async function respond(say) {
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

const timesOfLastMessageByChannelId = new Map<string, string>();

app.message(async ({message, say}) => {
  // https://github.com/slackapi/bolt-js/issues/904
  // https://fettblog.eu/typescript-hasownproperty/ 
  // JSON.stringify(message)
  if (typeof message === 'object' 
  && hasOwnProperty(message, 'text') && typeof message.text === 'string'
  && hasOwnProperty(message, 'channel') && typeof message.channel === 'string'
  && hasOwnProperty(message, 'ts') && typeof message.ts === 'string') {
    const isMessageQuick = timesOfLastMessageByChannelId.has(message.channel) && isQuick(timesOfLastMessageByChannelId.get(message.channel), message.ts)
    const isMessageSmall = isSmall(message.text);
    if (isMessageQuick || isMessageSmall) {
        // say() sends a message to the channel where the event was triggered
      await respond(say);
    }
    timesOfLastMessageByChannelId.set(message.channel, message.ts);
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
