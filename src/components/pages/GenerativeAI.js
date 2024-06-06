import React from 'react';
import '../../App.css';
import '../pagination/background.css';
import llm from '../../images/LLM.jpg';
import llm1 from '../../images/Large-language-models-LLM-building-blocks.png';
import meta3 from '../../images/Llama3_meta.svg'
import AGI1 from '../../images/AGI_1.jpg';
import webAGI from '../../images/fig_01_agi.webp';
import AI from '../../images/AI.jpg';
import AWS from '../../images/AWS-Logo-PNG-Images.png';
import SB from '../../images/switchboard.png';
import LC from '../../images/langchain.png';
import Lama from '../../images/llama.jpg';
import Gemini from '../../images/gemini-ai.jpg';
import Vertexai from '../../images/vertex-ai.webp';
import AGI from '../../images/agi.jpg';
import ChatGPT from '../../images/chatgpt-logo.png'
import ChatGPT1 from '../../images/chatgpt_logo-1.png';
import BedRock from '../../images/bedrock_ai.jpg';
import BedRock_1 from '../../images/BedRock_AI_1.jpg';
import BedRock_2 from '../../images/BedRock_AI_2.jpg';
import BedRock_3 from '../../images/BedRock_AI_3.jpg';
import Mistral from '../../images/Mistral_AI.jpg';
import Groq from '../../images/Groq_llamaindex.png';
import ES from '../../images/Elasticsearch_1.jpg';
import FW from '../../images/FireWorksAI.jpg';
import TAI from '../../images/TogetherAI.png';
import Voyage from '../../images/VoyageAI.png';
import Watson from '../../images/WatsonAI.png';
import Anthropic from '../../images/Anthropic.png';
import Nvidia from '../../images/nvidia.jpg';
import Gemini_1 from '../../images/Gemini_1.png';
import HF from '../../images/HugginFaceHub.jpg';
import CAI from '../../images/crewai.png';
import MSDesigner from '../../images/MSDesigner.jpg';
import MSCopilot from '../../images/Copilot_1.jpg';
import LMStudio from '../../images/LMStudio.jpg';
import Pieces from '../../images/Pieces.jpg';
import AnythingLLM from '../../images/AnythingLLM.jpg';


const GenerativeAI = () => {
  return (
   <div className='generativeai-top'>
    <div  className='generativeai'>
      <div style={{display:'block'}}>      
        <h2>Generative AI, Open AI, LLM(s), Paid and OpenSource LLM Frameworks</h2>
        <br/>       
        <ul style={{marginLeft:"50px"}}>
          <strong><h2>Generative AI <img src={AGI} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /> and LLM <img src={llm} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px",transition: 'transform 0.3s'}} alt={""} /> based Paid and OpenSource Frameworks </h2></strong>          
          <div style={{marginLeft:"20px", padding:"10px"}}>
            <ul>  
                <li><a href='https://www.cloudskillsboost.google/course_templates/536' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Google's Generative AI , Vertex AI <img src={Vertexai} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} />, Workbench, Gemini and Gemini Pro multimodel models , Intriductory generative AI free courses <img src={Gemini} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>  
                <li><a href='https://llama.meta.com/llama3/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Build the future of AI with Meta Llama 3. LLM OpenSource Framework for Development, , Productionization and Deployment  <img src={Lama} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://copilot.microsoft.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>ChatGPT - Text to Image creator and AI Agent</a></li>
                <li><a href='https://aws.amazon.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>BedRock Generative AI <img src={BedRock_2} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li> 
                <li><a href='https://python.langchain.com/docs/integrations/platforms/huggingface/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>huggingface hub <img src={HF} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li> 
                <li><a href='https://www.crewai.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>Crew AI <img src={CAI} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>    
                <li><a href='https://create.microsoft.com/en-us/features/ai-image-generator' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>MicroSoft Designer <img src={MSDesigner} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://copilot.microsoft.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>MicroSoft Copilot <img src={MSCopilot} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://lmstudio.ai/docs/text-embeddings' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>LM Studio <img src={LMStudio} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>   
                <li><a href='https://useanything.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>AnythingLLM Studio <img src={AnythingLLM} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>    
                <li><a href='https://pieces.app/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>Pieces AI Enabled Development <img src={Pieces} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>                                                      
            </ul> 
           </div> 
            <br/>
            <hr/>
            <br/>
            <strong><h2>LangChain and its integrations with many providers <img src={LC} className="card-img-top logo" alt={""} /> </h2></strong> 
            <div style={{marginLeft:"20px", padding:"10px"}}>
            <ul>               
                <li><a href='https://python.langchain.com/docs/get_started/introduction/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>LangChain is a framework for developing applications powered by large language models (LLMs). LLM OpenSource framework for Development, Productionization and Deployment</a></li> 
                <li><a href='https://python.langchain.com/docs/integrations/providers/mistralai/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Mistral AI is a platform that offers hosting for their powerful open source models.<img src={Mistral} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>   
                <li><a href='https://wow.groq.com/why-groq/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Groq(Elon Musk) is on a mission to set the standard for GenAI inference speed, helping real-time AI applications come to life today. World's first Language Processing Unit™, or LPU<img src={Groq} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>  
                <li><a href='https://python.langchain.com/docs/integrations/platforms/anthropic/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Anthropic is an AI safety and research company, and is the creator of Claude. This page covers all integrations between Anthropic models and LangChain.<img src={Anthropic} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://python.langchain.com/docs/integrations/providers/elasticsearch/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Elasticsearch is a distributed, RESTful search and analytics engine. It provides a distributed, multi-tenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents.<img src={ES} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://python.langchain.com/docs/integrations/providers/nvidia/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>NVIDIA provides an integration package for LangChain: langchain-nvidia-ai-endpoints.<img src={Nvidia} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://readme.fireworks.ai/docs/quickstart' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Fireworks.ai is a lightning-fast inference platform that helps you serve generative AI models <img src={FW} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>   
                <li><a href='https://python.langchain.com/docs/integrations/platforms/google/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>We recommend individual developers to start with Gemini API (langchain-google-genai) and move to Vertex AI (langchain-google-vertexai) when they need access to commercial support and higher rate limits. <img src={Gemini_1} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://python.langchain.com/docs/integrations/providers/ibm/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>IBM® watsonx.ai™ <img src={Watson} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>   
                <li><a href='https://python.langchain.com/docs/integrations/providers/voyageai/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>VoyageAI : Voyage AI builds embedding models, customized for your domain and company, for better retrieval quality. <img src={Voyage} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>
                <li><a href='https://python.langchain.com/docs/integrations/providers/together/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Together AI is a cloud platform for building and running generative AI. <img src={TAI} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /></a></li>                                      
            </ul>
            </div> 
            <br/>
            <hr/>
            <br/>            
            <strong><h2>OpenAI <img src={ChatGPT} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /> and ChatGPT <img src={ChatGPT1} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /> Apps</h2></strong>
            <div style={{marginLeft:"20px", padding:"10px"}}>
            <ul>                 
                <li><a href='https://platform.openai.com/docs/models' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>LLM OpeThe OpenAI API is powered by a diverse set of models with different capabilities and price points. You can also make customizations to our models for your specific use case with fine-tuning. OpenAI ChatGPT frameworks for LLM application Development, Productionization and Deployment</a></li>
                <li><a href='https://gpt3demo.com/apps/openai-gpt-3-playground' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>A web-based playground to experiment with various models from OpenAI ChatGPT</a></li>      
                <li><a href='https://platform.openai.com/apps' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>OpenAI ChatGPT Apps</a></li>  
                <li><a href='https://platform.openai.com/docs/overview' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Welcome to the OpenAI ChatGPT developer platform</a></li>  
            </ul> 
          </div> 
        </ul> 
        <br/> 
      </div>  
      </div>    
    </div>
  );
}

export default GenerativeAI;
