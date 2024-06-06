import React, { useEffect, useRef } from 'react';
import './Animation.css'; // CSS file for styling
import CircleAnimationGPT from '../animation/CircleAnimationGPT';

const Animation = () => {
    return (
        <>
            <div className='animation'> 
                <div className="points-container"> 
                    <div className="animated-circle-d"></div>
                    <div className="animated-circle-a"></div>
                    <div className="animated-circle-b"></div>
                    <div className="animated-circle-c"></div>
                </div> 
                <div style={{justifyContent:"center", alignItems:"center"}}>
                    <CircleAnimationGPT/>                    
                </div>    
              
            </div>
        </>
      );
};


export default Animation;
