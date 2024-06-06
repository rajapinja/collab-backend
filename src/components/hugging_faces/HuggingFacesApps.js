import React from 'react';
import './HuggingFacesApps.css';

const HuggingFacesApps = () => {
  const apps = [
    {
        url: 'https://huggingface.co/spaces/rajapinja/Generate-Transalte-Text',
        title: 'Generate-Translate-Text',
        description: 'This AI application generates courteous text tailored to various relationships and social norms. It creates appropriate messages for different contexts, such as formal greetings, thank-you notes, and personal acknowledgments. Additionally, the AI translates the generated text into multiple languages, ensuring that the sentiment and politeness are preserved across cultural boundaries.',
        icon: (             
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#388E3C">
                <path d="M13 5v1.5l3-3-3-3V4H8v2.5l-3-3 3-3V3l4 4zm7 4.5l-3-3V7h-4v1.5l-3-3-3 3V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4.5z"/>
            </svg>        
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/SentimentAnalyzer',
        title: 'SentimentAnalyzer',
        description: 'This sentiment analysis tool evaluates product reviews to determine the overall sentiment—positive, negative, or neutral. By analyzing the language and tone used in the reviews, it provides insights into customer satisfaction and feedback.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#D32F2F">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-3h2v2h-2v-2zm0-8h2v6h-2V9z"/>
            </svg>          
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/TextSummerizerYoutube',
        title: 'TextSummerizerYoutube',
        description: 'This text summarizer processes YouTube transcripts using a given ID, condensing lengthy video content into concise summaries. It captures key points and main ideas, making it easier to grasp the essential information quickly.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#1976D2">
                <path d="M12 2L1 21h22L12 2zm-1 7h2v6h-2zm0 7h2v2h-2z"/>
            </svg>        
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/Courteous-Writeups',
        title: 'Courteous-Writeups',
        description: 'This AI application generates courteous text tailored to various relationships and social norms. It creates appropriate messages for different contexts, such as formal greetings, thank-you notes, and personal acknowledgments.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#FBC02D">
                <path d="M11.99 2c-5.51 0-9.99 4.49-9.99 10s4.48 10 9.99 10S22 17.51 22 12 17.52 2 11.99 2zM12 18c-1.59 0-2.97-.82-3.78-2.05l7.83-7.83c1.23.81 2.06 2.19 2.06 3.78 0 2.76-2.24 5-5 5z"/>
            </svg>          
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/LanuageTranslator',
        title: 'LanguageTranslator',
        description: 'The AI translates the generated text into multiple languages, ensuring that the sentiment and politeness are preserved across cultural boundaries.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#7B1FA2">
                <path d="M20.12 17.08l-.17.17c-.4.39-.91.59-1.44.59h-8.7l2.13-5h3.45l-1.15 2.67 1.5.69 1.15-2.67 1.54.71-1.79 4.17zm-12.41-4.09h-3.45l-2.13-5h8.71c.53 0 1.04.21 1.43.59l.18.17 1.8 4.17-1.55.71-1.14-2.67-1.5.69 1.15 2.67H8.88l1.5-3.5zM15.5 11h-7l-1-2.5h9z"/>
            </svg>          
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/ChatBot.',
        title: 'ChatBot',
        description: 'Ask questions, get answers from chatbot.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#7B1FA2">
                <path d="M20.12 17.08l-.17.17c-.4.39-.91.59-1.44.59h-8.7l2.13-5h3.45l-1.15 2.67 1.5.69 1.15-2.67 1.54.71-1.79 4.17zm-12.41-4.09h-3.45l-2.13-5h8.71c.53 0 1.04.21 1.43.59l.18.17 1.8 4.17-1.55.71-1.14-2.67-1.5.69 1.15 2.67H8.88l1.5-3.5zM15.5 11h-7l-1-2.5h9z"/>
            </svg>          
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/DcoContextQandA.',
        title: 'DocumentContextQandA.',
        description: 'Ask questions, get answers from chatbot uploaded document',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#7B1FA2">
                <path d="M20.12 17.08l-.17.17c-.4.39-.91.59-1.44.59h-8.7l2.13-5h3.45l-1.15 2.67 1.5.69 1.15-2.67 1.54.71-1.79 4.17zm-12.41-4.09h-3.45l-2.13-5h8.71c.53 0 1.04.21 1.43.59l.18.17 1.8 4.17-1.55.71-1.14-2.67-1.5.69 1.15 2.67H8.88l1.5-3.5zM15.5 11h-7l-1-2.5h9z"/>
            </svg>          
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/ProcessImageObjects',
        title: 'Image Object Detector',
        description: 'Object Detector, to detect objects with image document.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#7B1FA2">
                <path d="M20.12 17.08l-.17.17c-.4.39-.91.59-1.44.59h-8.7l2.13-5h3.45l-1.15 2.67 1.5.69 1.15-2.67 1.54.71-1.79 4.17zm-12.41-4.09h-3.45l-2.13-5h8.71c.53 0 1.04.21 1.43.59l.18.17 1.8 4.17-1.55.71-1.14-2.67-1.5.69 1.15 2.67H8.88l1.5-3.5zM15.5 11h-7l-1-2.5h9z"/>
            </svg>          
        )
      },
      {
        url: 'https://huggingface.co/spaces/rajapinja/ImageToText',
        title: 'Image ot Text Extraction',
        description: 'Text Extracter from an Image Document.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#7B1FA2">
                <path d="M20.12 17.08l-.17.17c-.4.39-.91.59-1.44.59h-8.7l2.13-5h3.45l-1.15 2.67 1.5.69 1.15-2.67 1.54.71-1.79 4.17zm-12.41-4.09h-3.45l-2.13-5h8.71c.53 0 1.04.21 1.43.59l.18.17 1.8 4.17-1.55.71-1.14-2.67-1.5.69 1.15 2.67H8.88l1.5-3.5zM15.5 11h-7l-1-2.5h9z"/>
            </svg>          
        )
      }
  ];

  return (
    <div className="hf">
      <header className="hf-header">
        <h3>ML and AI Apps Currently Hosted and Live on Huggingface Hub Spaces </h3>
      </header>
      <main className="hf-main">
        <div className="card-container-hf">
          {apps.map(app => (
            <div className="card-hf" key={app.url}>
              <div className="icon">{app.icon}</div>
              <a href={app.url} target="_blank" rel="noopener noreferrer" className="logo" alt={""}>{app.title}</a>
              <p style={{padding:"6px", marginLeft:"4px"}}>{app.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HuggingFacesApps;
