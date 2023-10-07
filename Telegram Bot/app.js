require("dotenv").config();
const {Configuration, OpenAIApi}=require("openai");
const Telegram=require("node-telegram-bot-api");
const bot=new Telegram(process.env.TELEGRAM_TOKEN,{polling:true});
const config=new Configuration({
    apiKey:process.env.OPENAI_API_KEY
});
const openai=new OpenAIApi(config);
bot.onText(/\/start/,(msg)=>{
bot.sendMessage(msg.chat.id,"Hi, welcome to the sukun bot 😊");
});

bot.on("message",async (msg)=>{
const chatId=msg.chat.id;
const reply=await openai.createCompletion({max_tokens:200,
model:"ada",
prompt:msg.text,
temperature:0.5});
bot.sendMessage(chatId,reply.data.choices[0].text);
});