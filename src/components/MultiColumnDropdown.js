import React, { useState } from 'react';
import './MultiColumnDropdown.css';
import { Link } from 'react-router-dom';

function MultiColumnDropdown({ closeMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    closeMenu(); // Close the menu after clicking on an item
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'multidropdown-menu clicked' : 'multidropdown-menu'}
      >
         <ul className='multidropdown-column'>
            {MultiMenuItems.slice(0,4).map((item, index) => {
                return (
                
                        <li key={index} style={{display:"flex"}}>
                          <img src={images[index]} className="logo" style={{width:"24px", height:"24px", borderRadius:"6px", transition: 'transform 0.3s', marginLeft:"6px", marginTop:"12px"}} alt={""} />
                          <Link
                              className={item.cName}
                              to={item.path}
                          >
                              {item.title}
                          </Link>
                        </li>                
                );  
             })}
         </ul>
         <ul className='multidropdown-column'>
            {MultiMenuItems.slice(4,8).map((item, index) => {
                return (
                
                  <li key={index} style={{display:"flex"}}>
                    <img src={images[index+4]} className="logo" style={{width:"24px", height:"24px", borderRadius:"6px", transition: 'transform 0.3s', marginLeft:"6px", marginTop:"12px"}} alt={""} />
                    <Link
                        className={item.cName}
                        to={item.path}
                    >
                        {item.title}
                    </Link>
                </li>                 
                );
            
            })}
         </ul>
         <ul className='multidropdown-column'>
            {MultiMenuItems.slice(8,12).map((item, index) => {
                return (
                
                  <li key={index} style={{display:"flex"}}>
                    <img src={images[index+8]} className="logo" style={{width:"24px", height:"24px", borderRadius:"6px", transition: 'transform 0.3s', marginLeft:"6px", marginTop:"12px"}} alt={""} />
                    <Link
                        className={item.cName}
                        to={item.path}
                    >
                        {item.title}
                    </Link>
                </li>    
                );            
            })}
            
        </ul>
        <ul className='multidropdown-column'>
            {MultiMenuItems.slice(12).map((item, index) => {
                return (
                
                  <li key={index} style={{display:"flex"}}>
                    <img src={images[index+8]} className="logo" style={{width:"24px", height:"24px", borderRadius:"6px", transition: 'transform 0.3s', marginLeft:"6px", marginTop:"12px"}} alt={""} />
                    <Link
                        className={item.cName}
                        to={item.path}
                    >
                        {item.title}
                    </Link>
                </li>    
                );            
            })}
            
        </ul>
      </ul>
    </>
  );
}

export default MultiColumnDropdown;

export const MultiMenuItems = [
    {
      title: 'AI vs Gen AI',
      path: '/aivsgenai',
      cName: 'dropdown-link',
    },
    {
      title: 'RAG Explained',
      path: '/rag',
      cName: 'dropdown-link',
    },
    {
      title: 'LLMs Explained',
      path: '/llms',
      cName: 'dropdown-link',
    },
    {
      title: 'AdvancedUtility',
      path: '/advanced',
      cName: 'dropdown-link',
    },
    {
      title: 'Generative AI, LLM',
      path: '/generativeai',
      cName: 'dropdown-link',
    },
    {
      title: 'Video Conf Apps',
      path: '/videoconf',
      cName: 'dropdown-link',
    },
    {
      title: 'AI Apps',
      path: '/cardrotation',
      cName: 'dropdown-link'
    },
    {
      title: 'Together.ai',
      path: '/pointanimation',
      cName: 'dropdown-link'
    },
    {
      title: 'Animation',
      path: '/animation',
      cName: 'dropdown-link'
    },
    {
      title: 'Circle Animation GPT',
      path: '/circleanimationgpt',
      cName: 'dropdown-link'
    },
    {
      title: 'AnimationDownward',
      path: '/animationdownward',
      cName: 'dropdown-link'
    },
    {
      title: 'Canvas Animation',
      path: '/canvasanimation',
      cName: 'dropdown-link'
    },
    {
      title: 'Canvas Image',
      path: '/canvasimage',
      cName: 'dropdown-link'
    },
    {
      title: 'Lottie Animation',
      path: '/lottieanimation',
      cName: 'dropdown-link'
    },
    {
      title: '5mins Video Creation',
      path: '/fiveminsvideo',
      cName: 'dropdown-link'
    },
    {
      title: 'Rain Animation',
      path: '/rainanimation',
      cName: 'dropdown-link'
    }
  ];
  
  export const images = [
    require('../images/Mistral_AI.jpg'),
    require('../images/Groq_llamaindex.png'),
    require('../images/Elasticsearch_1.jpg'),
    require('../images/FireWorksAI.jpg'),
    require('../images/AGI_1.jpg'),
    require('../images/VoyageAI.png'),
    require('../images/WatsonAI.png'),
    require('../images/Anthropic.png'),
    require('../images/nvidia.jpg'),
    require('../images/Gemini_1.png'),
    require('../images/Copilot_1.jpg'),
    require('../images/LMStudio.jpg'),
    require('../images/Pieces.jpg')
  ];
  
  