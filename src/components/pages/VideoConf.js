import React from 'react';
import '../../App.css';
import '../pagination/background.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faGooglePlus, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faMicrosoft, faExchangeAlt, faZoho, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // Import from free-solid-svg-icons
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import SB from '../../images/switchboard.png';


const VideoConf = () => {

  const VerticalLine = () => {
    return <div className="vertical-line"></div>;
  };

  return (
    <div className='videoconf'>
      <h1 style={{ marginLeft: "20px", padding: "10px", justifyContent: "center" }}>Video Conferencing Apps</h1>
      <br />
      <div style={{ marginLeft: "20px", padding: "10px", display: "flex", border: "1px solid #39b1b5", width: "96%", alignContent: "center", borderRadius: "6px" }}>
        <div style={{ marginLeft: "20px", padding: "10px", display: "block" }}>
          <a href='https://www.switchboard.app/why-switch/video-conference' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faExchangeAlt} className="skype-icon" /> <span>SwitchBoard</span>
              {/* <img src={SB} className="logo" style={{width:"34px", height:"34px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /> */}
            </div>
          </a>
          <a href='https://meet.google.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faGooglePlus} className="skype-icon" /><span>Google Meet</span>
            </div>
          </a>
          <a href='https://zoom.us/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faUsers} className="skype-icon" /><span>ZOOM</span>
            </div>
          </a>
          <a href='https://slack.com/intl/en-in/features/huddles' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faSlack} className="skype-icon" /><span>Huddles</span>
            </div>
          </a>
        </div>
        <br />
        <div style={{ marginLeft: "20px", padding: "10px", display: "block" }}>
          <a href='https://www.zoho.com' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faUsers} className="skype-icon" /> <span>ZOHO</span>
            </div>
          </a>
          <a href='https://www.microsoft.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faUserFriends} className="skype-icon" /><span>MS Teams</span>
            </div>
          </a>
          <a href='https://www.dialpad.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faPhoneAlt} className="skype-icon" /> <span>DailPad</span>
            </div>
          </a>
          <a href='https://www.skype.com/en/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple" }}>
            <div className="small-card">
              <FontAwesomeIcon icon={faSkype} className="skype-icon" /> <span>Skype</span>
            </div>
          </a>
        </div>
        <VerticalLine />
        <br />
        <div style={{ marginLeft: "20px", padding: "20px", display: "flex" }}>
          <a href='https://www.zoho.com' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "red", padding: "15px" }}>
            <FontAwesomeIcon icon={faUsers} className="skype-icon" /> <span>ZOHO</span>
          </a>
          <a href='https://www.microsoft.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black", padding: "15px" }}>
            <FontAwesomeIcon icon={faUserFriends} className="skype-icon" /><span>MS Teams</span>
          </a>
          <a href='https://www.dialpad.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "green", padding: "15px" }}>
            <FontAwesomeIcon icon={faPhoneAlt} className="skype-icon" /> <span>DailPad</span>
          </a>
          <a href='https://www.skype.com/en/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "blue", padding: "15px" }}>
            <FontAwesomeIcon icon={faSkype} className="skype-icon" /> <span>Skype</span>
          </a>
          <a href='https://slack.com/intl/en-in/features/huddles' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#b908b0", padding: "15px" }}>
            <FontAwesomeIcon icon={faSlack} className="skype-icon" /><span>Huddles</span>
          </a>
          <a href='https://www.switchboard.app/why-switch/video-conference' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#0dca20", padding: "15px" }}>
          <img src={SB} className="logo" style={{width:"46px", height:"46px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} /><span>SwitchBoard</span>
          {/* <FontAwesomeIcon icon={faExchangeAlt} className="skype-icon" /> <span>SwitchBoard</span> */}
          </a>
          <a href='https://meet.google.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple", padding: "15px" }}>
            <FontAwesomeIcon icon={faGooglePlus} className="skype-icon" /><span>Google Meet</span>
          </a>
          <a href='https://zoom.us/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1179c3", padding: "15px" }}>
            <FontAwesomeIcon icon={faUsers} className="skype-icon" /><span>ZOOM</span>
          </a>
        </div>  
        <div className="verticlesolidbar">
          <a href='https://www.zoho.com' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "red", padding: "10px" }}>
            <FontAwesomeIcon icon={faUsers} className="skype-icon" />
          </a>
          <a href='https://www.microsoft.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black", padding: "10px" }}>
            <FontAwesomeIcon icon={faUserFriends} className="skype-icon" />
          </a>
          <a href='https://www.dialpad.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "green", padding: "10px" }}>
            <FontAwesomeIcon icon={faPhoneAlt} className="skype-icon" />
          </a>
          <a href='https://www.skype.com/en/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "blue", padding: "10px" }}>
            <FontAwesomeIcon icon={faSkype} className="skype-icon" />
          </a>
          <a href='https://slack.com/intl/en-in/features/huddles' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#b908b0", padding: "10px" }}>
            <FontAwesomeIcon icon={faSlack} className="skype-icon" />
          </a>
          <a href='https://www.switchboard.app/why-switch/video-conference' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#0dca20", padding: "10px" }}>
            {/* <FontAwesomeIcon icon={faExchangeAlt} className="skype-icon" /> */}<img src={SB} className="logo" style={{width:"46px", height:"46px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} />
          </a>
          <a href='https://meet.google.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "purple", padding: "10px" }}>
            <FontAwesomeIcon icon={faGooglePlus} className="skype-icon" />
          </a>
          <a href='https://zoom.us/' target="_blank" rel="noopener noreferrer" style={{ color: "#1179c3", padding: "10px" }}>
            <FontAwesomeIcon icon={faUsers} className="skype-icon" />
          </a>
        </div>     
      </div>
 {/* <hr/> */}
 <div style={{ marginLeft: "10px", padding: "20px", marginRight: "10px", marginBottom: "10px" }}>
          <a href='https://www.zoho.com' target="_blank" rel="noopener noreferrer" style={{ color: "red", padding: "20px" }}>
            <FontAwesomeIcon icon={faUsers} className="skype-icon" />
          </a>
          <a href='https://www.microsoft.com/' target="_blank" rel="noopener noreferrer" style={{ color: "black", padding: "20px" }}>
            <FontAwesomeIcon icon={faUserFriends} className="skype-icon" />
          </a>
          <a href='https://www.dialpad.com/' target="_blank" rel="noopener noreferrer" style={{ color: "green", padding: "10px" }}>
            <FontAwesomeIcon icon={faPhoneAlt} className="skype-icon" />
          </a>
          <a href='https://www.skype.com/en/' target="_blank" rel="noopener noreferrer" style={{ color: "blue", padding: "20px" }}>
            <FontAwesomeIcon icon={faSkype} className="skype-icon" />
          </a>
          <a href='https://slack.com/intl/en-in/features/huddles' target="_blank" rel="noopener noreferrer" style={{color: "#b908b0", padding: "20px" }}>
            <FontAwesomeIcon icon={faSlack} className="skype-icon" />
          </a>
          <a href='https://www.switchboard.app/why-switch/video-conference' target="_blank" rel="noopener noreferrer" style={{ color: "#0dca20", padding: "10px" }}>
            {/* <FontAwesomeIcon icon={faExchangeAlt} className="skype-icon" /> */}<img src={SB} className="logo" style={{width:"46px", height:"46px", borderRadius:"6px", transition: 'transform 0.3s'}} alt={""} />
          </a>
          <a href='https://meet.google.com/' target="_blank" rel="noopener noreferrer" style={{ color: "purple", padding: "20px" }}>
            <FontAwesomeIcon icon={faGooglePlus} className="skype-icon" />
          </a>
          <a href='https://zoom.us/' target="_blank" rel="noopener noreferrer" style={{ color: "#1179c3", padding: "10px" }}>
            <FontAwesomeIcon icon={faUsers} className="skype-icon" />
          </a>
        </div>
    </div>
  );
}

export default VideoConf;
