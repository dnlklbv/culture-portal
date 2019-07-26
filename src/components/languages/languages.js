import React from 'react';
import './languages.css';
import 'bootstrap/dist/css/bootstrap.css';

const Languages = () => (
  <ul className="nav justify-content-end">
    <li className="nav-item nav-active language-li">
      <a className="active" href="/en">EN</a>
    </li>
    <li className="nav-item language-li">
      <a href="/ru">RU</a>
    </li>
    <li className="nav-item language-li">
      <a href="/by">BY</a>
    </li>
  </ul>
);

export default Languages;
