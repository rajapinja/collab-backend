import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './LottieAnimation.css';
// import Lottie from 'react-lottie';
import { Player as LottiePlayer } from '@lottiefiles/react-lottie-player';

const animationData = require('./AnikiHamster.json'); 


const LottieAnimation = () => {
   
  
    return (
      <div className='animation-lottie'>          
         <div className='gap'>
              <DotLottieReact
                  src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/651308644ce6b51c9d6e41db_Training.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "250px"
                  }}                  
              />              
          </div>
         {/*  <div className='gap'>
              <DotLottieReact
                  src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/6542785e59be753951fe9825_Transparency.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "250px"
                  }}
              />
          </div>
          <div className='gap'>
              <DotLottieReact
                  src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/6542785ed82aad779c1b156b_Compression-Light.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "250px"
                  }}
              />
          </div> */}
          <div className='gap'>
              <DotLottieReact
                  src="
                  https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/6513086769f8866123aa5c0d_GPU.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "250px"
                  }}
              />
          </div>
          <div className='gap'>
              <DotLottieReact
                  src="
                  https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/6542785e633da61ff19112cf_Reduce%20Cost-Light.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "250px"
                  }}
              />
          </div>
          <div className='gap'>
              <DotLottieReact
                  src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/6542785d6d2211bb782506c1_Control.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "200px"
                  }}
              />
          </div>
          <div className='gap'>
              <DotLottieReact
                  src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/6513085d8864477543fdaf83_Fine-tuning.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "200px"
                  }}
              />
          </div>        
          <div className='gap'>           
            <DotLottieReact
                  src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/65130796c5e81529f319b892_Inference.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "200px"
                  }}
            />
          </div>
          <div className='gap'>           
            <DotLottieReact
                  src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/6549c17a1fc78d2d59b709f5_speed-light.json"
                  loop
                  autoplay
                  style={{
                      maxWidth: "200px"
                  }}
            />
          </div>
          <div className='hamster'>           
            <LottiePlayer
                src={animationData}
                loop={true} // Set to true for continuous animation
                autoplay={true} // Set to true for automatic playback
                style={{ width: 100, height: 100 }} // Adjust dimensions
            />
          </div>         
      </div>
    );
  };
  
  export default LottieAnimation;
  