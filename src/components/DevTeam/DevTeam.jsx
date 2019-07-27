import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const DevTeam = () => {
  const ghURL = 'https://github.com/';
  const developers = [
    {
      name: 'Andrey Somov',
      username: 'AndreySomov',
    },
    {
      name: 'Daniil Kuliabau',
      username: 'dnlklbv',
    },
    {
      name: 'Grigoriy Klimenko',
      username: 'GrigoriyKlimenko',
    },
    {
      name: 'Krystsina Gerko',
      username: 'ChrisGerBy',
    },
  ];

  const developersCards = developers.map(developer => (
    <Card key={developer.username}>
      <Card.Img variant="top" src={`${ghURL + developer.username}.png`} />
      <Card.Body>
        <Card.Title>{developer.name}</Card.Title>
        <Card.Subtitle className="text-muted">{developer.username}</Card.Subtitle>
        <Card.Link href={ghURL + developer.username} target="_blank">GitHub</Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <h2 className="mb-3">Development team</h2>
      <CardGroup>
        {developersCards}
      </CardGroup>
    </>
  );
};

export default DevTeam;
