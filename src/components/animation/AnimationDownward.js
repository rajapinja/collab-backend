import React, { useState, useEffect } from 'react';
import './AnimationDownward.css'; // Import CSS file for styling
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AnimationDownward = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger animation automatically when component mounts
    setAnimationStarted(true);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className='animation-d'>
        <div>
            <DotLottieReact
                src="https://lottie.host/63e43fb7-61be-486f-aef2-622b144f7fc1/2m8UGcP8KR.json"
                loop
                autoplay
                style={{
                    maxWidth: "300px"
                }}
            />
        </div>
        <div className="circle-d-container">
        <div className={`circle-d ${animationStarted ? 'animate' : ''}`}></div>
        <div className={`circle-d ${animationStarted ? 'move-backward-d' : ''} ${animationStarted && 'second-circle-d'}`}></div>
        <div className={`circle-d ${animationStarted ? 'move-backward-d' : ''}`}></div>
        <div className={`circle-d ${animationStarted ? 'move-backward-d' : ''}`}></div>
        {/* Add more circles if needed */}
        </div> 
    </div>
  );
};

export default AnimationDownward;
