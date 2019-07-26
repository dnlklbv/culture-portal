import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DevTeam = () => (
  <Container>
    <h2>Development team</h2>
    <Row>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
    </Row>
  </Container>
);

export default DevTeam;
