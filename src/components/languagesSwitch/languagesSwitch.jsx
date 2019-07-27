import React from 'react';
import './languagesSwitch.css';
import 'bootstrap/dist/css/bootstrap.css';

const LanguagesSwitch = () => (
  <ul className="nav justify-content-end languages-switch-ul">
    <li className="nav-item nav-active languages-switch-li">
      <a className="active" href="/en">EN</a>
    </li>
    <li className="nav-item languages-switch-li">
      <a href="/ru">RU</a>
    </li>
    <li className="nav-item languages-switch-li">
      <a href="/by">BY</a>
    </li>
  </ul>
);

export default LanguagesSwitch;
