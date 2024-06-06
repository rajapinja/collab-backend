import React from 'react';
import './ChatBotsTop10.css';
import chatGPT from '../../images/chatgpt_logo-1.png'; // Make sure to add actual images to your project
import alexa from '../../images/Alexa.png';
import siri from '../../images/siri.jpg';
import googleAssistant from '../../images/GA.png';
import ibmWatson from '../../images/IBW.png';
import microsoftXiaoice from '../../images/MS.png';
import replika from '../../images/Replika.png';
import mitsuku from '../../images/Mitsuku.jpg';
import cleverbot from '../../images/CleverBot.png';
import babylonHealth from '../../images/BLH.jpg';
import rulai from '../../images/rulai.webp';

const chatbots = [
  {
    name: 'ChatGPT (OpenAI)',
    description: 'A large language model trained by OpenAI, known for its conversational abilities and wide-ranging knowledge.',
    image: chatGPT
  },
  {
    name: 'Alexa (Amazon)',
    description: 'A virtual assistant developed by Amazon, primarily used in smart home devices and for voice-based interactions.',
    image: alexa
  },
  {
    name: 'Siri (Apple)',
    description: 'Apple\'s virtual assistant, available on iOS devices, macOS, and HomePod.',
    image: siri
  },
  {
    name: 'Google Assistant (Google)',
    description: 'Google\'s AI-powered virtual assistant, available on Android devices, Google Home, and other platforms.',
    image: googleAssistant
  },
  {
    name: 'IBM Watson Assistant',
    description: 'A chatbot platform developed by IBM that allows businesses to create and deploy conversational AI solutions.',
    image: ibmWatson
  },
  {
    name: 'Microsoft Xiaoice',
    description: 'An AI chatbot developed by Microsoft, primarily used in China, with a focus on emotional connection and empathetic conversations.',
    image: microsoftXiaoice
  },
  {
    name: 'Replika',
    description: 'An AI companion chatbot that aims to provide emotional support and personalized conversations.',
    image: replika
  },
  {
    name: 'Mitsuku',
    description: 'An award-winning chatbot created by Steve Worswick, known for its engaging and human-like conversations.',
    image: mitsuku
  },
  {
    name: 'Cleverbot',
    description: 'A web-based chatbot that learns from its conversations with users, created by Rollo Carpenter.',
    image: cleverbot
  },
  {
    name: 'Babylon Health',
    description: 'An AI-powered chatbot that provides medical advice and helps users manage their health.',
    image: babylonHealth
  },
  {
    name: 'Rulai',
    description: 'An AI chatbot platform that enables businesses to create personalized virtual assistants for customer support and engagement.',
    image: rulai
  }
];

const ChatBotsTop10 = () => {
  return (
    <div className="chatbot">
      <h1>Popular AI Chatbots</h1>
      <div className="card-container">
        {chatbots.map((chatbot, index) => (
          <div className="card-cb" key={index}>
            <img src={chatbot.image} style={{width:"40px", height:"40px", borderRadius:"5px"}} alt={`${chatbot.name} logo`} className="card-image" />
            <h2 className="card-title">{chatbot.name}</h2>
            <p className="card-description">{chatbot.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBotsTop10;
