import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './header';
import Menu from './menu';

const Layout = ({ children }) => (
  <>
    <Header />
    <Menu />
    <main>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            {children}
          </Col>
        </Row>
      </Container>
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
