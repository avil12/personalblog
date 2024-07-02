// CustomMessageInput.js
import React, { useState } from 'react';
import './Chat.css';

const emojis = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚'];

const CustomMessageInput = ({ setState, ...props }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmojiClick = (emoji) => {
    setMessage(prevMessage => prevMessage + emoji);
    setShowEmojiPicker(false);
  };

  const handleSend = () => {
    if (message.trim()) {
      props.onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="custom-input-container">
      <button className="emoji-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
      {showEmojiPicker && (
        <div className="emoji-picker">
          {emojis.map(emoji => (
            <span key={emoji} className="emoji" onClick={() => handleEmojiClick(emoji)}>{emoji}</span>
          ))}
        </div>
      )}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="chat-input"
      />
      <button className="send-button" onClick={handleSend}>Send</button>
    </div>
  );
};

export default CustomMessageInput;
