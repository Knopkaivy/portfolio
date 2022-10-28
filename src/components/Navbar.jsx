import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import '../styles/Navbar.css';

const Navbar = () => {
  const items = ['hi', 'projects', 'about', 'contacts'];
  let location = useLocation();

  const [activeItem, setActiveItem] = useState(
    location.pathname === '/' ? 'hi' : location.pathname.slice(1)
  );
  useEffect(() => {
    const path = location.pathname.slice(1);
    let newVal;
    if (path === '') {
      newVal = 'hi';
    } else if (items.includes(path)) {
      newVal = path;
    } else {
      return;
    }
    setActiveItem(newVal);
  }, [location]);
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
