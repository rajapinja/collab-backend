import React from 'react';
import '../../App.css';
import '../pagination/background.css';
import Overview from '../pagination/Overview';

const Products = () => {
  return (
   <div className='products'>
      <div style={{display:'block'}}> 
        <h2>Program Overview:</h2>
      <br/>
      <ul>
         <strong>Technologies Covered:</strong>
          <ul style={{marginLeft:"40px"}}>
            <li>Front-end: React, React Native, Node.js (Windows OS), Expo Go</li>
            <li>Back-end: Python, Flask</li>
            <li>Database: MySQL on AWS Linux 2/2023</li>
            <li>Cloud Computing: AWS Cloud with EC2, RDS</li>
            <li>Static Hosting on Heroku and AWS S3</li>
            <li>Back-end Hosting on Heroku and AWS EC2</li>
            <li>Chat GPT, Gemini, and Microsoft Bing</li>
            <li>AI fundumentals , such Text Embedings, Integrations, Search and Indexing techinques</li>
            <li>Working and Developing LLM projects using Jupiter and Google Colabs notebooks for computational power of using GPU, TPU and LPUs </li>
            <li>LLm frameworks such as Llama, LangChain, and Streamlit</li>
          </ul>        
        </ul>
        <br/>
        <hr></hr>
        <br/>
        <h3>You can reach us @</h3>     
        <p>Mobile: 93478 39890 | 63005 44805</p>     
        <p>Email: rajapinja@laraidsolutions.com | raja.pinja@gmail.com | raja_pinja@yahoo.com</p>
      </div>      
    </div>     

  );
}

export default Products;