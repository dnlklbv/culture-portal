import React from 'react';
import './menu.css';
import { Link } from 'gatsby';

const Menu = () => (
  <nav className="navbar">
    <ul className="nav navbar-ul">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Poets</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Contact us</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
