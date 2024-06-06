import React, { useState } from 'react';
import { AIMenuItems } from './AIMenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function AIDropdown3({ closeMenuAI }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    closeMenuAI(); // Close the menu after clicking on an item
  };

  // Define the maximum number of items per column
  const itemsPerColumn = 3;

  // Split the menu items into columns
  const columns = [];
  for (let i = 0; i < AIMenuItems.length; i += itemsPerColumn) {
    columns.push(AIMenuItems.slice(i, i + itemsPerColumn));
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {columns.map((columnItems, columnIndex) => (
          <ul className="dropdown-column" key={columnIndex}>
            {columnItems.map((item, index) => (
              <li key={index}>
                <Link className={item.cName} to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}

export default AIDropdown3;
