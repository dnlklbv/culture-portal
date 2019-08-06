import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import Jumbotron from 'react-bootstrap/Jumbotron';

const PortalDescription = ({ t }) => (
  <Jumbotron className="px-5 py-4 mb-5">
    <h2
      className="mb-5"
      style={{ textAlign: 'center' }}
    >
      {t('Welcome to the information portal about the poets of Belarus!')}
    </h2>
    <p>
      {t('On this website you can find:')}
    </p>
    <ul>
      <li>
        {t('the biographies of the authors that describe the most important stages of their  lives,')}
      </li>
      <li>
        {t('the maps of memorable places connected with their life and work,')}
      </li>
      <li>
        {t('the images and interesting videos that describe the most significant pieces of authors’ works!')}
      </li>
    </ul>
    <p>
      {t('Enjoy reading and exploring the lives of the most honored poets of Belarus!')}
    </p>
  </Jumbotron>
);

PortalDescription.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(PortalDescription);
