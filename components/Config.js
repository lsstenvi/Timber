
  
  // Config starter code
  import React from 'react';
  import { createChatBotMessage } from "react-chatbot-kit";
  import BotAvatar from "./BotAvatar";
  
  const config = {
    botName: "Alex",
    initialMessages: [createChatBotMessage(`Hi there!`)],
    customComponents: { 
      botAvatar: (props) => <BotAvatar {...props}/>
    }
  }
  
  export default config