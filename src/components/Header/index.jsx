import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './styles.scss';

function Header() {
  return (
    <header className="Header">
      <ul className="Header_Navbar">
        <li className="Header_Navbar-Link">
          <NavLink activeClassName="header_navlink-active" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="Header_Navbar-Link">
          <NavLink activeClassName="header_navlink-active" to="/posts/add">
            Create post
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
