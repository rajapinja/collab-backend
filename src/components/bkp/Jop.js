import React, { useState } from 'react';
import './jop.css';
import Overview from '../pagination/Overview';
import Heading from '../pagination/heading';
import AdditionalBenefits from '../pagination/AdditionalBenefits';
import BonusTopics from '../pagination/BonusTopics';
import WhyToChoose from '../pagination/WhyToChoose';
import Contact from '../pagination/Contact';

function Jop() {
  const [currentPage, setCurrentPage] = useState('overview');

  const handleMenuClick = (pageName) => {
    setCurrentPage(pageName);
  };
  return (
     <div>
      <div className="header">
        <h1>Job Oriented Program</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <button className="menu-link" onClick={() => handleMenuClick('overview')}>The Overview</button>
          </li>
          <li>
            <button className="menu-link" onClick={() => handleMenuClick('heading')}>The Heading</button>
          </li>
          <li>
            <button className="menu-link" onClick={() => handleMenuClick('abenefits')}>The Additional Benefits</button>
          </li>
          <li>
            <button className="menu-link" onClick={() => handleMenuClick('bonusTopics')}>The Bonus Topics</button>
          </li>
          <li>
            <button className="menu-link" onClick={() => handleMenuClick('whyToChoose')}>Why To Choose Us</button>
          </li>
          <li>
            <button className="menu-link" onClick={() => handleMenuClick('contact')}>Contact</button>
          </li>
        </ul>
      </div>
      <div className="main">
        {/* Render content based on the currentPage state */}
        {currentPage === 'overview' && <Overview />}
        {currentPage === 'heading' && <Heading />}
        {currentPage === 'abenefits' && <AdditionalBenefits />}
        {currentPage === 'bonusTopics' && <BonusTopics />}
        {currentPage === 'whyToChoose' && <WhyToChoose />}
        {currentPage === 'contact' && <Contact />}
      </div>  
      <div class="footer">
        <p>Resize the browser window to see how the content respond to the resizing.</p>
      </div>    
    </div>   
  );
}

export default Jop;
