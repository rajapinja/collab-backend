import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import AIDropdown from './AIDropdown';
import MultiColumnDropdown from './MultiColumnDropdown';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [aidropdown, setAIDropdown] = useState(false);
  const [multidropdown, setMultiDropdown] = useState(false);
  const [multicolumndropdown, setMultiColumnDropdown] = useState(false);

//  library.add(...all)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    
    } else {
      setDropdown(true);
     
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnterAI = () => {
    if (window.innerWidth < 960) {
          setAIDropdown(true);
    } else {      
      setAIDropdown(true);
    }
  };

  const onMouseLeaveAI = () => {
    if (window.innerWidth < 960) {
    
      setAIDropdown(false);
    } else {
     
      setAIDropdown(false);
    }
  };

  const onMouseEnterMulti = () => {
    if (window.innerWidth < 960) {
          setMultiDropdown(true);
    } else {      
      setMultiDropdown(true);
    }
  };

  const onMouseLeaveMulti = () => {
    if (window.innerWidth < 960) {
    
      setMultiDropdown(false);
    } else {
     
      setMultiDropdown(false);
    }
  };

  const onMouseEnterMultiColumn = () => {
    if (window.innerWidth < 960) {
      setMultiColumnDropdown(true);
    } else {      
      setMultiColumnDropdown(true);
    }
  };

  const onMouseLeaveMultiColumn = () => {
    if (window.innerWidth < 960) {
    
      setMultiColumnDropdown(false);
    } else {
     
      setMultiColumnDropdown(false);
    }
  };

  const closeMenu = () => {
    setDropdown(false); // Function to close the dropdown menu  
    setClick(false); // Function to close the mobile menu
  };

  const closeMenuAI = () => {   
    setAIDropdown(false);
    setClick(false); // Function to close the mobile menu
  };

  const closeMenuMulti = () => {   
    setMultiDropdown(false);
    setClick(false); // Function to close the mobile menu
  };

  const closeMenuMulticolumn = () => {   
    setMultiColumnDropdown(false);
    setClick(false); // Function to close the mobile menu
  };

  return (
    <>
      <nav className='navbar'>
      <DotLottieReact
            src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/65130796c5e81529f319b892_Inference.json"
            loop
            autoplay
            style={{
              maxWidth: "50px",
              // marginTop: "-12px", marginLeft: "20px"
            }}   
          />
        
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <span>JOP</span>
         
          {/* <FontAwesomeIcon icon="fa-sharp fa-thin fa-atom-simple" style={{ marginLeft: '0.5rem' }} /> */}
          <i className='fas fa-heart' style={{ marginLeft: '0.5rem' }} />          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown closeMenu={closeMenu} />}
          </li>
          <li className='nav-item'
           onMouseEnter={onMouseEnterAI}
           onMouseLeave={onMouseLeaveAI}
          >
            <Link
                to='/aivsgenai'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                AI~GenAI <i className='fas fa-caret-down' />
              </Link>
              {aidropdown && <AIDropdown closeMenuAI={closeMenuAI} />}
          </li>   
          {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnterMulti}
            onMouseLeave={onMouseLeaveMulti}
          >
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              MCMenu <i className='fas fa-caret-down' />
            </Link>
            {multidropdown && <MultiDropdown closeMenu={closeMenuMulti} />}
          </li> */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterMultiColumn}
            onMouseLeave={onMouseLeaveMultiColumn}
          >
            <Link
              to='/aigenaillms'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              AIGenAILLMs <i className='fas fa-caret-down' />
            </Link>
            {multicolumndropdown && <MultiColumnDropdown closeMenu={closeMenuMulticolumn} />}
          </li>
          <li className='nav-item'>
            <Link
                to='/jop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                JOP
              </Link>
          </li>         
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>  
         
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
