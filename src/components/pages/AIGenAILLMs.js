import React from 'react';
import './AIGenAILLMs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faGooglePlus, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faMicrosoft, faExchangeAlt, faZoho, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // Import from free-solid-svg-icons
import { faUsers } from '@fortawesome/free-solid-svg-icons';
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
import OpenAIApps from '../../images/OpenAIApps.png';
import OAP from '../../images/OAIPG.png';
import OADP from '../../images/OADP.png';
import LangChain from '../../images/LangChain_1.jpg';
import Streamlit from '../../images/Streamlite.png';
import Jupyter from '../../images/Jupyter.png';
import Colab from '../../images/Colab.png';
import Python from '../../images/Python.png';
import ReactLogo from '../../images/React.png';
import Heroku from '../../images/Heroku.png';
import ngrok from '../../images/ngrok.png';
import GH from '../../images/GH.png';
import ExpoGo from '../../images/ExpoGo.jpg';
import ReactNative from '../../images/ReactNative.png';
import Flask from '../../images/Flask.jpg';
import MySQL from '../../images/MySQL.png';
import FastAPI from '../../images/FastAPI.png';
import AmazonQ from '../../images/AmazonQ.jpg';
import GHCopilot from '../../images/GHCopilot.jpg';
import Devika from '../../images/DevikaAI.jpg';
import ElevenLabs from '../../images/11labs.png';
import Invideo from '../../images/invideoai.jpg';
import MovioTech from '../../images/movioai.jpg';

const AIGenAILLMs = () => { 

  return (
    <>
        <div className='aigenaillms'>
            <div className='aigenaillmsleft'>
                <h2 className='h2prop'>AI, Gen AI and LLMs</h2> 
            </div>
            {/* <div className='aigenaillmsright'>
                <h2 className='h2prop'>AI, Gen AI and LLMs</h2>     
                <div className='container'>
            
                </div>
            </div>       */}
        </div>   
    <div className='aigenaillmsbottom'>           
        <div className='containerbottom'>
            <strong>LangChain and its integrations with many providers, LangChain is a framework for developing applications powered by large language models (LLMs). <img src={LC} className="card-img-top logo" alt={""} /></strong> 
           <div style={{display:"flex", marginTop:"12px"}}>
            <div style={{marginLeft:"20px", padding:"10px", listStyleType:"none"}}>
                <ul> 
                    <li><img src={Lama} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://llama.meta.com/llama3/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Meta Llama 3</a></li> 
                    <li><img src={Mistral} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/providers/mistralai/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Mistral</a></li>   
                    <li><img src={Groq} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://wow.groq.com/why-groq/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"10px"}}>Groq-LPU</a></li>  
                    <li><img src={Anthropic} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/platforms/anthropic/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Anthropic</a></li>
                    <li><img src={CAI} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://www.crewai.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Crew AI</a></li> 
                    <li><img src={BedRock_2} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://aws.amazon.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>BedRock Gen-AI</a></li> 
                    <li><img src={HF} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/platforms/huggingface/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none",  padding:"15px"}}>huggingface hub</a></li>                    
                    <li><img src={MSDesigner} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://create.microsoft.com/en-us/features/ai-image-generator' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>MicroSoft Designer</a></li>
                    <li><img src={MSCopilot} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://copilot.microsoft.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>MicroSoft Copilot</a></li>
                </ul>
            </div> 
            <div style={{marginLeft:"20px", padding:"10px", listStyleType:"none"}}>
                <ul>  
                    <li><img src={LangChain} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/get_started/introduction/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>LangChain</a></li>    
                    <li><img src={ES} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/providers/elasticsearch/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Elasticsearch</a></li>
                    <li><img src={Nvidia} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/providers/nvidia/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Nvidia</a></li>
                    <li><img src={FW} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://readme.fireworks.ai/docs/quickstart' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Fireworks</a></li>   
                    <li><img src={Gemini_1} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/platforms/google/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Gemini</a></li>
                    <li><img src={Vertexai} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://www.cloudskillsboost.google/course_templates/536' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none",padding:"15px"}}>Vertex AI</a></li>  
                    <li><img src={ngrok} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://ngrok.com' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Ngrok</a></li>
                    <li><img src={FastAPI} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://fastapi.tiangolo.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>FastAPI</a></li>
                    <li><img src={Devika} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://devikaai.co/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Devika</a></li> 
                </ul>
            </div> 
            <div style={{marginLeft:"20px", padding:"10px", listStyleType:"none"}}>
                <ul>
                <li> <img src={Gemini} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://www.cloudskillsboost.google/course_templates/536' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Gemini, Gemini Pro, Vertex</a></li> 
                    <li><img src={Voyage} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/providers/voyageai/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>VoyageAI.</a></li>
                    <li><img src={TAI} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/providers/together/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Together AI.</a></li>                    
                    <li><img src={Watson} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://python.langchain.com/docs/integrations/providers/ibm/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>IBM® watsonx.ai™ </a></li>   
                    <li><img src={Heroku} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://devcenter.heroku.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Heroku </a></li>                                
                    <li><img src={AWS} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://aws.amazon.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>AWS </a></li> 
                    <li><img src={AmazonQ} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://aws.amazon.com/quicksight/q/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>AWS Q</a></li> 
                    <li><img src={GHCopilot} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://github.com/features/copilot' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>GitHub Copilot</a></li>
                    <li><img src={GH} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://github.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>GitHub</a></li>                                                                
                </ul>
            </div> 
            <div style={{marginLeft:"20px", padding:"10px"}}>
                <ul>                 
                    <li><img src={ChatGPT} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://platform.openai.com/docs/models' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>OpenAI API</a></li>
                    <li><img src={OAP} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://gpt3demo.com/apps/openai-gpt-3-playground' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>OpenAI PlayGround</a></li>      
                    <li><img src={OpenAIApps} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://platform.openai.com/apps' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>OpenAI ChatGPT Apps</a></li>  
                    <li><img src={OADP} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://platform.openai.com/docs/overview' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>OpenAI ChatGPT dev platform</a></li> 
                    <li><img src={Python} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://www.python.org/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Python</a></li>  
                    <li><img src={ReactLogo} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://react.dev/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>React</a></li> 
                    <li><img src={ReactNative} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://reactnative.dev/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>React Native</a></li> 
                    <li><img src={ExpoGo} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://expo.dev/go' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Expo Go</a></li> 
                    <li><img src={Flask} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://flask.palletsprojects.com/en/3.0.x/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Flask</a></li>  
                      
                </ul> 
            </div> 
            <div style={{marginLeft:"20px", padding:"10px"}}>
                <ul>        
                    <li><img src={Streamlit} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://streamlit.io/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Streamlit</a></li>                                                               
                    <li><img src={LMStudio} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://lmstudio.ai/docs/text-embeddings' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>LM Studio</a></li>   
                    <li><img src={AnythingLLM} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://useanything.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>AnythingLLM Studio</a></li>    
                    <li><img src={Pieces} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://pieces.app/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Pieces AI</a></li>   
                    <li><img src={Jupyter} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://jupyter.org/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Jupyter Notebook</a></li>                                                    
                    <li><img src={Colab} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://colab.google/notebooks/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Google Colab</a></li>                                                                                                     
                    <li><img src={MySQL} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://www.mysql.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>MySQL</a></li>
                    <li><img src={ElevenLabs} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://elevenlabs.io/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>11ElevenLabs AI</a></li>
                    <li><img src={Invideo} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://invideo.io/ai/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Invideo AI</a></li>
                    <li><img src={MovioTech} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s', marginTop:"12px"}} alt={""} /><a href='https://www.movioai.tech' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", padding:"15px"}}>Movio AI</a></li>
                </ul> 
            </div> 
        </div>
        </div>
    </div>    
  </>
  );
}

export default AIGenAILLMs;


// export const images = [
//     require('../../images/Mistral_AI.jpg'),
//     require('../../images/Groq_llamaindex.png'),
//     require('../../images/Elasticsearch_1.jpg'),
//     require('../../images/FireWorksAI.jpg'),
//     require('../../images/AGI_1.jpg'),
//     require('../../images/VoyageAI.png'),
//     require('../../images/WatsonAI.png'),
//     require('../../images/Anthropic.png'),
//     require('../../images/nvidia.jpg'),
//     require('../../images/Gemini_1.png'),
//     require('../../images/Copilot_1.jpg'),
//     require('../../images/LMStudio.jpg'),
//     require('../../images/Pieces.jpg')
//   ];
  