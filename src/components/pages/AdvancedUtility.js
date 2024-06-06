import React from 'react';
import '../../App.css';
import '../pagination/background.css';

const AdvancedUtility = () => {
  return (
   
   <div className='advanced'>
      <div style={{display:'block'}}>      
        <h1>Advanced Programming :</h1>
        {/* <br/> */}
        <ul style={{marginLeft:"50px"}}>
         <strong> <h2>Below Apps are Latest Advanced utitlities to develop new programming </h2></strong>
         <div style={{marginLeft:"20px", padding:"10px"}}>
            <ul >
                <li><a href='https://streamlit.io/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "purple"}}>Streamlit - Data Scripts to Web and Mobile Apps by Python</a></li>
                <li><a href='https://expo.dev/go' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>Expo Go is a sandbox that enables you to quickly experiment with building native Android and iOS apps</a></li>
                <li><a href='https://ngrok.com/docs' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>Put your app on internet in less than a minute, by tunneling your app's http, https Ports</a></li>
                <li><a href='https://devcenter.heroku.com/categories/reference' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>Free Cloud based on Hosting platform for both front-end and back-end applications, along with app devlopment platform support</a></li>
                <li><a href='https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>Write applications that extend Snowflake, act as a client, or act as an integrating component, Data Loading and  mechanisms for connecting to Snowflake and executing database commands</a></li>  
                <li><a href='https://aws.amazon.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>Static website hosting along with other services</a></li>
                <li><a href='https://fastapi.tiangolo.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000000"}}>FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+ based on standard Python type hints.</a></li>      
            </ul>  
         </div>     
         <strong> <h2>Vector Database </h2></strong>
         <div style={{marginLeft:"20px", padding:"10px"}}>
            <ul >
                <li><a href='https://python.langchain.com/docs/integrations/providers/pinecone/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "purple"}}>Pinecone is a vector database with broad functionality.</a></li>
                <li><a href='https://python.langchain.com/docs/integrations/providers/robocorp/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "purple"}}>Robocorp helps build and operate Python workers(Actions) that run seamlessly anywhere at any scale.</a></li>
            </ul>  
         </div>  
        </ul> 
        <br/> 
      </div>      
    </div>
    
  );
}

export default AdvancedUtility;
