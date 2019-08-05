import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const DevTeam = ({ t }) => {
  const ghURL = 'https://github.com/';
  const developers = [
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
    {
      name: 'Christsina Alimova',
      username: 'ChristinaAlimova',
    },
  ];

  const developersCards = developers.map(developer => (
    <Card key={developer.username}>
      <Card.Img variant="top" src={`${ghURL + developer.username}.png`} />
      <Card.Body>
        <Card.Title className="mb-3">{developer.name}</Card.Title>
        <Card.Subtitle className="text-muted">{developer.username}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={ghURL + developer.username} target="_blank">GitHub</Card.Link>
      </Card.Footer>
    </Card>
  ));

  return (
    <>
      <h2 className="mb-3">{t('Development team')}</h2>
      <CardGroup>
        {developersCards}
      </CardGroup>
    </>
  );
};

DevTeam.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(DevTeam);
