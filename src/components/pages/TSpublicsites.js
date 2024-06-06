import React from 'react';
import '../../App.css';
import '../pagination/background.css';

const TSpublicsites = () => {
  return (
   
   <div className='advanced'>
      <div style={{display:'block'}}>      
        <h1>TS Govt Public websites :</h1>
        <br/>
        <ul style={{marginLeft:"50px"}}>
         <strong> <h2>Below Apps are Latest TS Government Websites </h2></strong>
         <div style={{marginLeft:"20px", padding:"10px"}}>
            <ul >
                <li><a href='https://rera.telangana.gov.in/' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "purple"}}>TELANGANA STATE REAL ESTATE REGULATORY AUTHORITY</a></li>   
                <li><a href='https://ts.meeseva.telangana.gov.in/meeseva/home.htm' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "purple"}}>TS MEE-SEVA Citizen Services</a></li>   
                <li><a href='https://bms.hyderabadwater.gov.in/20kl/AadharVerification' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "purple"}}>TS HMWS&SB</a></li>        
            </ul>
         </div>
        </ul> 
        <br/> 
      </div>      
    </div>
    
  );
}

export default TSpublicsites;
