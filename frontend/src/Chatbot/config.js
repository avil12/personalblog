// config.js

import { createChatBotMessage } from 'react-chatbot-kit';
import CustomMessageInput from './CustomMessageInput';

const config = { 
  botName: "BlogBot",
  floating:true,
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help you with your blog articles. ✍️ What would you like to know?"),
    createChatBotMessage("You can ask about the latest articles, popular topics, or any specific article you're looking for. 📚")
  ],
  customComponents: {
    customMessageInput: (props) => <CustomMessageInput {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config;
