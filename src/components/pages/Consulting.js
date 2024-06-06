import React from 'react';
import '../../App.css';
import '../pagination/background.css';

const Consulting = () => {
  return (
   <div className='consulting'>
      <div style={{display:'block'}}>
        <h3>Consulting :</h3>
        <ul>
         <strong>Below Apps are responsive, can be accessed from all the Devices</strong>
          <ul>
          <li><a href='http://laraidsolutions.com' target="_blank" rel="noopener noreferrer">LARAID SOFTWARE SOLUTIONS</a></li>
            <li><a href='http://myapt-app.s3-website-us-east-1.amazonaws.com' target="_blank" rel="noopener noreferrer">Apartment Maintenance App</a></li>
            <li><a href='http://skilled-squad-central.s3-website-us-east-1.amazonaws.com' target="_blank" rel="noopener noreferrer">Skill Squad Central App (Skilled Worker Services)</a></li>
            <li><a href='http://my-react-frontend.s3-website-us-east-1.amazonaws.com' target="_blank" rel="noopener noreferrer">Job Oriented Program App</a></li>
            <li><a href='http://my-collabplatform-app.s3-website-us-east-1.amazonaws.com' target="_blank" rel="noopener noreferrer">Collaboration App - Platform for Freelancers, Remote Workers, Employees and Employers </a></li>           
          </ul>        
        </ul>
        <br/>
        <hr/>
        <br/>
        <ul>
         <strong> Android Mobile Apps</strong>
          <ul>
            <li><a href='/'>Score Recorder</a></li>
            <li><a href='/'>POLITICO</a></li>
            <li><a href='/'>PROJECT-X (Realestate App)</a></li>
            <li><a href='/'>RegiMate ( Registration App for an Event or any Program - its universal app , can be used by any event-program organizers)</a></li>
            <li><a href='/'>RikshawRide (Mainly targeting rural areas for booking an auto-rikshaw) </a></li>    
            <li><a href='/'>WageWise (Small to Medium skale Employers to run their Payroll System) </a></li>         
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

export default Consulting;
