import React, { useState } from 'react';
import { AIMenuItems } from './AIMenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function AIDropdown({ closeMenuAI }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    closeMenuAI(); // Close the menu after clicking on an item
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {AIMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AIDropdown;
