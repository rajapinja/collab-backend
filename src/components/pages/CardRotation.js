import React, { useState, useEffect, useRef } from 'react';
import './CardRotation.css'; // You can define your CSS styles for cards and animation here
import FastAPI from '../../images/FastAPI.png';
import AmazonQ from '../../images/AmazonQ.jpg';
import GHCopilot from '../../images/GHCopilot.jpg';
import Devika from '../../images/DevikaAI.jpg';
import Streamlit from '../../images/Streamlite.png';
import Jupyter from '../../images/Jupyter.png';
import Colab from '../../images/Colab.png';
import Lama from '../../images/llama.jpg';
import Gemini from '../../images/gemini-ai.jpg';
import Vertexai from '../../images/vertex-ai.webp';
import Mistral from '../../images/Mistral_AI.jpg';
import Groq from '../../images/Groq_llamaindex.png';
import ES from '../../images/Elasticsearch_1.jpg';
import FW from '../../images/FireWorksAI.jpg';
import TAI from '../../images/TogetherAI.png';
import Voyage from '../../images/VoyageAI.png';
import ChatGPT from '../../images/chatgpt-logo.png';
import Devin from '../../images/Devin.jpg';
import LC2 from '../../images/LangChain_2.jpg';
import CAI from '../../images/crewai.png';
import HF from '../../images/HugginFaceHub.jpg';
import MSDesigner from '../../images/MSDesigner.jpg';
import MSCopilot from '../../images/Copilot_1.jpg';
import LMStudio from '../../images/LMStudio.jpg';
import Pieces from '../../images/Pieces.jpg';
import AnythingLLM from '../../images/AnythingLLM.jpg';

import PointsAnimation from './PointAnimation';


const gradientColors = [
    'linear-gradient(to right, #ff4b1f, #ff9068)',
    'linear-gradient(to right, #59C173, #a17fe0, #5D26C1)',
    'linear-gradient(to right, #11998e, #38ef7d)',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(170, 224, 60))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(224, 115, 165))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(195, 233, 58))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(170, 224, 60))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(224, 115, 165))',
    'linear-gradient(to bottom, rgb(240, 235, 240), rgb(133, 193, 201))',
    'linear-gradient(to right, rgb(240, 235, 240), rgb(73, 138, 230))',
    'linear-gradient(to right, rgb(210, 214, 210), rgb(50, 198, 42))',
    'linear-gradient(to right, rgb(239, 236, 236), rgb(223, 76, 76))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(51, 20, 203))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(29, 75, 212))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(178, 63, 219))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(212, 36, 71))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(214, 93, 206))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(112, 225, 168))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(151, 179, 23))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(207, 229, 110))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(223, 219, 34))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(222, 130, 64))',
    'linear-gradient(to right, rgb(232, 232, 226), rgb(232, 43, 43))'
    // Add more gradient colors as needed
  ];

const Card = ({ title, desc, imageUrl, link, gradientColor, onMouseEnter, onMouseLeave }) => {

    return (
      <div className="card-rt" style={{ transition: 'transform 0.3s', background: gradientColor  }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div>
            <h3 style={{color:"rgb(17,137,181)", font:"bold", marginTop:"6px"}}>{title}</h3>
            <div style={{display:"flex"}}>
                <p style={{justifyContent:"left", fontSize:"12px"}}>{desc}</p>
                <img src={imageUrl} alt={title} style={{ width: '42px', height: '42px', borderRadius: '6px' }} />
            </div>
        </div>        
        <div className="content">       
            <hr style={{ width: 'auto', borderWidth: '1px solid blue', borderColor: 'linear-gradient(to right, rgb(232, 232, 226), rgb(224, 115, 165))' }} />
            <h4 style={{marginBottom:"9px", color:"white"}}><a href={link} target="_blank" rel="noopener noreferrer" className="logo" alt={""} >{title}</a></h4>
        </div>
      </div>
    );
  };

const CardRotation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='cardrotation'>       
       <PointsAnimation />   
    {/* // <div className={`container ${isHovered ? 'paused' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}> */}
        {/* <div ref={cardContainerRef} className={`container ${isHovered ? 'paused' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ animationDuration: isVisible ? '10s' : '5s' }}> */}
        <div className={`container ${isHovered ? 'paused' : ''}`}>
            <div className="cardcontainer left-to-right">
                {/* Left to Right Cards */}
                <Card title="Fast API" desc="FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints" imageUrl={FastAPI} link="https://fastapi.tiangolo.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Amazon Q" desc="Your generative AI assistant that makes it easy to build and consume insights" imageUrl={AmazonQ} link="https://aws.amazon.com/quicksight/q/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="GH Copilot" desc="Proven to increase developer productivity and accelerate the pace of software development." imageUrl={GHCopilot} link="https://github.com/features/copilot"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Together AI" desc="The fastest cloud platform for building and running generative AI." imageUrl={TAI} link="https://python.langchain.com/docs/integrations/providers/together/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Streamlit" desc="Streamlit turns data scripts into shareable web apps in minutes. All in pure Python. No front‑end experience required." imageUrl={Streamlit} link="https://streamlit.io/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Llama AI"  desc="We've integrated Llama 3 into Meta AI, our intelligent assistant, that expands the ways people can get things done, create and connect with Meta AI." imageUrl={Lama} link="https://llama.meta.com/llama3/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Gemini AI" desc="Supercharge your creativity and productivity. I'm trained on large amounts of publicly available data and I can communicate and generate human-like .text in response to a wide range of questions" imageUrl={Gemini} link="https://www.cloudskillsboost.google/course_templates/536"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Jupyter NB" desc="Jupyter Notebook is an open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative text. It supports various programming languages, but it is popular in the data science and machine learning communities for its integration with Python." imageUrl={Jupyter} link="https://jupyter.org/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Mistral LLM" desc="Mistral AI is a research lab building the best open source models in the world. La Plateforme enables developers and enterprises to build new products and applications, powered by Mistral’s open source and commercial LLMs." imageUrl={Mistral} link="https://docs.mistral.ai/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="ChatGPT LLM" desc="ChatGPT is an AI model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It's part of the GPT (Generative Pre-trained Transformer) family of models and is commonly used for various natural language processing tasks like conversation generation, language translation, and text summarization." imageUrl={ChatGPT} link="https://chatgpt.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="LangChain LLM" desc="LangChain is a framework for developing applications powered by large language models (LLMs).LangChain simplifies every stage of the LLM application lifecycle Development, Productionization and Deployment." imageUrl={LC2} link="https://python.langchain.com/docs/get_started/introduction/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>               
                <Card title="Devika AI" desc="Devika AI is an advanced artificial intelligence platform developed by a team of experts in machine learning, natural language processing, and computer vision. It serves as a comprehensive toolkit for organizations seeking to leverage AI technology to solve complex problems, automate tasks, and unlock new opportunities for growth and efficiency." imageUrl={Devika} link="https://devikaai.co"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Devin AI" desc="Meet Devin, the world's first fully autonomous AI software engineer.‍Devin is a tireless, skilled teammate, equally ready to build alongside you or independently complete tasks for you to review. " imageUrl={Devin} link="https://www.cognition.ai/introducing-devin"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Groq AI" desc="Groq(Elon Musk) is on a mission to set the standard for GenAI inference speed, helping real-time AI applications come to life today. World's first Language Processing Unit™, or LPU." imageUrl={Groq} link="https://wow.groq.com/why-groq/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="FireWorks AI" desc="Fireworks.ai is a lightning-fast inference platform that helps you serve generative AI models." imageUrl={FW} link="https://readme.fireworks.ai/docs/quickstart"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Crew AI" desc="Most AI Agents frameworks are complexWe provide the power with simplicity. We provide a platform and hope you create wonders." imageUrl={CAI} link="https://www.crewai.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
            </div>  
                {/* Right to Left Cards */}
                <div className="cardcontainer right-to-left">
                <Card title="Fast API" desc="FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints." imageUrl={FastAPI} link="https://fastapi.tiangolo.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Amazon Q" desc="Your generative AI assistant that makes it easy to build and consume insights." imageUrl={AmazonQ} link="https://aws.amazon.com/quicksight/q/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="GH Copilot" desc="Proven to increase developer productivity and accelerate the pace of software development." imageUrl={GHCopilot} link="https://github.com/features/copilot"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Together AI" desc="The fastest cloud platform for building and running generative AI." imageUrl={TAI} link="https://python.langchain.com/docs/integrations/providers/together/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Streamlit" desc="Streamlit turns data scripts into shareable web apps in minutes. All in pure Python. No front‑end experience required." imageUrl={Streamlit} link="https://streamlit.io/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Llama" desc="We've integrated Llama 3 into Meta AI, our intelligent assistant, that expands the ways people can get things done, create and connect with Meta AI." imageUrl={Lama} link="https://llama.meta.com/llama3/" gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Gemini" desc="Supercharge your creativity and productivity. I'm trained on large amounts of publicly available data and I can communicate and generate human-like text in response to a wide range of questions." imageUrl={Gemini} link="https://www.cloudskillsboost.google/course_templates/536"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Jupyter NB" desc="Jupyter Notebook is an open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative text. It supports various programming languages, but it is popular in the data science and machine learning communities for its integration with Python." imageUrl={Jupyter} link="https://jupyter.org/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Mistral LLM" desc="Mistral AI is a research lab building the best open source models in the world. La Plateforme enables developers and enterprises to build new products and applications, powered by Mistral’s open source and commercial LLMs." imageUrl={Mistral} link="https://docs.mistral.ai/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="ChatGPT LLM" desc="ChatGPT is an AI model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It's part of the GPT (Generative Pre-trained Transformer) family of models and is commonly used for various natural language processing tasks like conversation generation, language translation, and text summarization." imageUrl={ChatGPT} link="https://chatgpt.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="LangChain LLM" desc="LangChain is a framework for developing applications powered by large language models (LLMs).LangChain simplifies every stage of the LLM application lifecycle Development, Productionization and Deployment." imageUrl={LC2} link="https://python.langchain.com/docs/get_started/introduction/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Devika AI" desc="Devika AI is an advanced artificial intelligence platform developed by a team of experts in machine learning, natural language processing, and computer vision. It serves as a comprehensive toolkit for organizations seeking to leverage AI technology to solve complex problems, automate tasks, and unlock new opportunities for growth and efficiency." imageUrl={Devika} link="https://devikaai.co"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Devin AI" desc="Meet Devin, the world’s first fully autonomous AI software engineer.‍Devin is a tireless, skilled teammate, equally ready to build alongside you or independently complete tasks for you to review. " imageUrl={Devin} link="https://www.cognition.ai/introducing-devin"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Groq AI" desc="Groq(Elon Musk) is on a mission to set the standard for GenAI inference speed, helping real-time AI applications come to life today. World's first Language Processing Unit™, or LPU." imageUrl={Groq} link="https://wow.groq.com/why-groq/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="FireWorks AI" desc="Fireworks.ai is a lightning-fast inference platform that helps you serve generative AI models." imageUrl={FW} link="https://readme.fireworks.ai/docs/quickstart"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Crew AI" desc="Most AI Agents frameworks are complexWe provide the power with simplicity. We provide a platform and hope you create wonders." imageUrl={CAI} link="https://www.crewai.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
            </div>
            <div className="cardcontainer left-to-right">
                {/* Left to Right Cards */}
                <Card title="LM Studio" desc="LM Studio is a desktop application for running local LLMs on your computer." imageUrl={LMStudio} link="https://lmstudio.ai/docs/text-embeddings"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Anything LLM" desc="AnythingLLM is the easiest to use, all-in-one AI application that can do RAG, AI Agents, and much more with no code or infrastructure headaches." imageUrl={AnythingLLM} link="https://docs.useanything.com/getting-started/what-is-allm"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="HugginFace Hub" desc="The platform where the machine learning community collaborates on models, datasets, and applications." imageUrl={HF} link="https://huggingface.co/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="MS Designer" desc="Bring your best ideas to Life with MS Designer." imageUrl={MSDesigner} link="https://designer.microsoft.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="MS Copilot" desc="Your everyday AI companion." imageUrl={MSCopilot} link="https://copilot.microsoft.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Voyage"  desc="Voyage AI builds embedding models, customized for your domain and company, for better retrieval quality." imageUrl={Voyage} link="https://www.voyageai.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Pieces" desc="Pieces is your AI-enabled productivity tool designed to supercharge developer efficiency. Unify your entire toolchain with an on-device copilot that helps you capture, enrich, and reuse useful materials, streamline collaboration, and solve complex problems through a contextual understanding of your workflow." imageUrl={Pieces} link="https://pieces.app/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>                <Card title="Voyage"  desc="Voyage AI builds embedding models, customized for your domain and company, for better retrieval quality." imageUrl={Voyage} link="https://www.voyageai.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Elastic Search" desc="Get relevant results at unprecedented speed with open and flexible enterprise solutions — powered by The Elastic Search AI Platform. Minimize downtime. Accelerate root cause analysis. Respond to threats at scale." imageUrl={ES} link="https://www.elastic.co/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>   
                <Card title="Google Colab" desc="Colab is a hosted Jupyter Notebook service that requires no setup to use and provides free access to computing resources, including GPUs and TPUs. Colab is especially well suited to machine learning, data science, and education." imageUrl={Colab} link="https://colab.google/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>                
                <Card title="Voyage"  desc="Voyage AI builds embedding models, customized for your domain and company, for better retrieval quality." imageUrl={Voyage} link="https://www.voyageai.com/"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>
                <Card title="Vertex AI" desc="Vertex AI is a fully-managed, unified AI development platform for building and using generative AI. Access and utilize AI Studio, Agent Builder, and 130+ foundation models including Gemini 1.5 Pro—all from Vertex AI." imageUrl={Vertexai} link="https://cloud.google.com/vertex-ai"  gradientColor={gradientColors[Math.floor(Math.random() * gradientColors.length)]} onMouseEnter={handleHover} onMouseLeave={handleHover}/>                                                       
            </div>                   
        </div>       
    </div>
  );
};

export default CardRotation;
