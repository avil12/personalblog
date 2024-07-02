// Import libraries
import React, { useState, useRef } from 'react';
import './Chat.css';
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import logo from './chatbotlogo.svg';

function ChatbotApp() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');
  const emojiPickerRef = useRef(null); // Ref for emoji picker positioning

  const handleEmojiClick = (event, emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false); // Close emoji picker after selection
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Implement the function to send the message to the chatbot
      // For example, you can dispatch an action to the chatbot state
      // dispatch({ type: 'addMessage', message });

      // Reset the message input
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <button className="chatbot-toggle-button" onClick={() => setShowChatbot(!showChatbot)}>
        <img src={logo} alt="Chatbot Logo" />
      </button>
      {showChatbot && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            headerText="Chatbot"
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
          <div className="chat-input-container">
            <button className="emoji-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
            {showEmojiPicker && (
              <div
                className="emoji-picker-container"
                ref={emojiPickerRef} // Assign ref for positioning
              >
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message... (click for emojis)"
              className="chat-input"
            />
            <button className="send-button" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatbotApp;
