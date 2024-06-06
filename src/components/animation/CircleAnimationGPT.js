import React, { useState, useEffect } from 'react';
import './CircleAnimationGPT.css'; // Import CSS file for styling

const CircleAnimationGPT = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger animation automatically when component mounts
    setAnimationStarted(true);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
    <div className="circle-container">
      <div className={`circle ${animationStarted ? 'animate' : ''}`}></div>
      <div className={`circle ${animationStarted ? 'move-backward' : ''} ${animationStarted && 'second-circle'}`}></div>
      <div className={`circle ${animationStarted ? 'move-backward' : ''}`}></div>
      <div className={`circle ${animationStarted ? 'move-backward' : ''}`}></div>
      {/* Add more circles if needed */}
    </div> 
</>
  );
};

export default CircleAnimationGPT;
