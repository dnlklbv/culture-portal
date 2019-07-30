import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const PortalDescription = () => (
  <Jumbotron className="px-5 py-4 mb-5">
    <h2
      className="mb-5"
      style={{ textAlign: 'center' }}
    >
        Welcome to the information portal about the poets of Belarus!
    </h2>
    <p>
      On this website you can find:
      <ul>
        <li>
          the biographies of the authors that describe the most important stages of their  lives,
        </li>
        <li>
          the maps of memorable places connected with their life and work,
        </li>
        <li>
          the images and interesting videos that describe
          the most significant pieces of authors’ works!
        </li>
      </ul>

    </p>
    <p>
      Enjoy reading and exploring the lives of the most honored poets of Belarus!
    </p>
  </Jumbotron>
);

export default PortalDescription;
