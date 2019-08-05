import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';


const Footer = ({ t }) => (
  <footer
    className="mt-4"
    style={{
      backgroundColor: 'gray',
      padding: '0.3rem',
      color: 'white',
      textAlign: 'center',
      position: 'absolute',
      bottom: '0px',
      width: '100%',
    }}
  >
    <p>
      { t('Build with gatsby.') }
    </p>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Footer);
