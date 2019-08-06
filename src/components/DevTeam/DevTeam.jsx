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
      contribution: [
        'workflow organization',
        'team component',
        'authors search',
        'data structure',
        'data querying',
        'internationalization',
      ],
    },
    {
      name: 'Grigoriy Klimenko',
      username: 'GrigoriyKlimenko',
      contribution: [
        'collecting data',
        'data translation',
        'author of the day component',
      ],
    },
    {
      name: 'Krystsina Gerko',
      username: 'ChrisGerBy',
      contribution: [
        'header',
        'navigation',
        'author card component',
        'timeline',
        'gallery of pictures',
        'video',
        'fill data about authors',
      ],
    },
    {
      name: 'Christsina Alimova',
      username: 'ChristinaAlimova',
      contribution: [],
    },
  ];

  const developersCards = developers.map(developer => (
    <Card key={developer.username}>
      <Card.Img variant="top" src={`${ghURL + developer.username}.png`} />
      <Card.Body>
        <Card.Title className="mb-3">{developer.name}</Card.Title>
        <Card.Subtitle className="text-muted mb-3">{developer.username}</Card.Subtitle>
        <ul className="pl-1">
          {developer.contribution.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
