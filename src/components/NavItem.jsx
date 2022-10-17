import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavItem.css';

const NavItem = ({ isActive, name, setActiveItem }) => {
  let handleSetActiveItem = () => {
    setActiveItem(name);
  };
  return (
    <NavLink
      to=""
      className={`NavItem ${isActive && 'NavItem-active'}`}
      onClick={handleSetActiveItem}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
