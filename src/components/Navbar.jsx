import React, { useState } from 'react';
import NavItem from './NavItem';
import '../styles/Navbar.css';

const Navbar = () => {
  const items = ['hi', 'projects', 'about', 'contacts'];
  const [activeItem, setActiveItem] = useState('hi');
  const itemList = items.map((item) => {
    return (
      <NavItem
        key={item}
        name={item}
        isActive={activeItem === item}
        setActiveItem={setActiveItem}
      />
    );
  });
  return <div className="Navbar">{itemList}</div>;
};

export default Navbar;
