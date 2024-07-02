// ChatbotApp.js
import React, { useState } from 'react';
import './Chat.css';
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import logo from './chatbotlogo.svg';

function ChatbotApp() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="chat">
      <button className="chatbot-toggle-button" onClick={() => setShowChatbot(!showChatbot)}>
        <img src={logo} alt="Chatbot Logo" />
      </button>
      {showChatbot && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}

export default ChatbotApp;
