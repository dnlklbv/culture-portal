import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const DevTeam = () => (
  <>
    <h2>Development team</h2>
    <CardGroup style={{ margin: 'auto' }}>
      <Card>
        <Card.Img variant="top" src="https://github.com/dnlklbv.png" />
        <Card.Body>
          <Card.Title>Daniil Kulyabov</Card.Title>
          <Card.Subtitle className="text-muted">dnlklbv</Card.Subtitle>
          <Card.Link href="https://github.com/dnlklbv" target="_blank">GitHub</Card.Link>
        </Card.Body>
      </Card>
    </CardGroup>
  </>
);

export default DevTeam;
