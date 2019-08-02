import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { withTranslation } from 'react-i18next';
import LanguagesSwitch from '../languagesSwitch';


const Header = ({ t }) => (
  <header
    style={{
      background: 'tomato',
      padding: '0.3rem',
    }}
  >
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <h1 style={{ margin: 0, fontSize: '2rem' }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {t('Poets of Belarus')}
            </Link>
          </h1>
          <h2 style={{ fontSize: '1.2rem' }}>{t('Information Portal')}</h2>
        </Col>
        <Col md={{ span: 2, offset: 3 }} lg={{ span: 1, offset: 3 }} xs={{ span: 4 }}>
          <LanguagesSwitch />
        </Col>
      </Row>
    </Container>
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Header);
