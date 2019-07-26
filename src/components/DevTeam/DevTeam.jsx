import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const DevTeam = () => (
  <>
    <h2>Development team</h2>
    <CardGroup style={{ margin: 'auto' }}>
      <Card>
        <Card.Img variant="top" src="https://github.com/andreysomov.png" />
        <Card.Body>
          <Card.Title>Andrey Somov</Card.Title>
          <Card.Subtitle className="text-muted">AndreySomov</Card.Subtitle>
          <Card.Link href="https://github.com/andreysomov" target="_blank">GitHub</Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://github.com/dnlklbv.png" />
        <Card.Body>
          <Card.Title>Daniil Kuliabau</Card.Title>
          <Card.Subtitle className="text-muted">dnlklbv</Card.Subtitle>
          <Card.Link href="https://github.com/dnlklbv" target="_blank">GitHub</Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://github.com/grigoriyklimenko.png" />
        <Card.Body>
          <Card.Title>Grigoriy Klimenko</Card.Title>
          <Card.Subtitle className="text-muted">GrigoriyKlimenko</Card.Subtitle>
          <Card.Link href="https://github.com/grigoriyklimenko" target="_blank">GitHub</Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://github.com/chrisgerby.png" />
        <Card.Body>
          <Card.Title>Krystsina Gerko</Card.Title>
          <Card.Subtitle className="text-muted">ChrisGerBy</Card.Subtitle>
          <Card.Link href="https://github.com/chrisgerby" target="_blank">GitHub</Card.Link>
        </Card.Body>
      </Card>
    </CardGroup>
  </>
);

export default DevTeam;
