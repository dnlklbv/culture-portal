import React from 'react';
import PropTypes from 'prop-types';

import './i18n';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './header';
import Menu from './menu';
import Footer from './Footer';

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
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
