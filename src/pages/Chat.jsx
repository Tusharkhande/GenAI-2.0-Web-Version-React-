import React, { useState, useRef } from 'react';
import Features from '../components/Features'; // Assuming you have a FeaturesComponent

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const chatContainerRef = useRef();

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessages = [...messages, { role: 'user', content: inputText.trim() }];
      setMessages(newMessages);
      setInputText('');

      // Simulate a response from the chatbot (you can replace this with actual API calls)
      setTimeout(() => {
        const botResponse = 'This is a sample response from the chatbot.';
        const updatedMessages = [...newMessages, { role: 'bot', content: botResponse }];
        setMessages(updatedMessages);

        // Scroll to the bottom of the chat container after the message is sent
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }, 500);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      {messages.length > 0 ? (
        <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-200 text-blue-800 self-end' : 'bg-green-200 text-green-800 self-start'}`}
            >
              {message.content}
            </div>
          ))}
        </div>
      ) : (
        <Features /> // Display features component when there are no messages
      )}
      <div className="flex mb-0 p-4 border-t border-gray-300">
        <input
          type="text"
          className="flex-1 p-2 mr-2 border border-gray-300 rounded"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
