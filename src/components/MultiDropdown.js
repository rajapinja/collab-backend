import React, { useState, useRef } from 'react';
import './MultiDropdown.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function MultiDropdown({ closeMenu }) {
  const [hovered, setHovered] = useState(false);
  const dropdownRef = useRef(null);
  const [click, setClick] = useState(false);


  const handleClick = () => {
    setClick(!click);
    closeMenu(); // Close the menu after clicking on an item
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const getMenuPosition = () => {
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      // Adjust menu position based on screen width and dropdown position
      if (dropdownRect.left < screenWidth / 2) {
        return 'dropdown-content';
      } else {
        return 'dropdown-content left';
      }
    }
    return 'dropdown-content';
  };

  return (
    <div
        ref={dropdownRef} 
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}       
        className={click ? 'dropdown clicked' : 'dropdown'}        
        onClick={handleClick}  
    >    
      {hovered && (
        <div className={getMenuPosition()}>
          <div className="dropdown-column">
            {MultiMenuItems.slice(0, 4).map((item, index) => (
              <Link
                key={index}
                className={item.cName}
                to={item.path}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="dropdown-column">
            {MultiMenuItems.slice(4, 8).map((item, index) => (
              <Link
                key={index}
                className={item.cName}
                to={item.path}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="dropdown-column">
            {MultiMenuItems.slice(8).map((item, index) => (
              <Link
                key={index}
                className={item.cName}
                to={item.path}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MultiDropdown;


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
  }
];
