import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavItem.css';

const NavItem = ({ isActive, name, setActiveItem }) => {
  return (
    <NavLink
      to={name === 'hi' ? '/' : name}
      className={`NavItem ${isActive && 'NavItem-active'}`}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
