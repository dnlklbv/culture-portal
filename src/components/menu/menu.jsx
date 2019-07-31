import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import './menu.css';

import { Link } from 'gatsby';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Menu = ({ t }) => (
  <div className="nav-line">
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <nav className="navbar">
            <ul className="nav navbar-ul">
              <li className="nav-item">
                <Link className="nav-link" to="/">{t('Home')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/poets">{t('Poets')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">{t('Contact us')}</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  </div>
);

Menu.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Menu);
