import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Languages from '../languagesSwitch/languagesSwitch';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'tomato',
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
              {siteTitle}
            </Link>
          </h1>
          <h2 style={{ fontSize: '1.2rem' }}>Information portal</h2>
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <Languages />
        </Col>
      </Row>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Poets of Belarus',
};

export default Header;
