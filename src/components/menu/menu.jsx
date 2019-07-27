import React from 'react';
import './menu.css';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Menu = () => (
  <div className="nav-line">
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <nav className="navbar">
            <ul className="nav navbar-ul">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Poets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Contact us</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Menu;
