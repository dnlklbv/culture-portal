import React from 'react';
import './menu.css';

const Menu = () => (
  <nav className="navbar">
    <ul className="nav navbar-ul">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Poets</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact us</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
