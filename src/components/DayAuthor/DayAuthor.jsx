import React from 'react';

import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const DayAuthor = ({ t, authors, i18n }) => {
  const day = new Date().getDate();
  const lng = i18n.language;
  const dayAuthor = authors[day % authors.length].node.frontmatter[lng];

  return (
    <>
      <h2 className="mb-4">{t('Author of the day')}</h2>
      <Card className="mb-5">
        <Row>
          <Col md={4}>
            <Card.Link href="#"><Card.Img src={dayAuthor.imgSrc} /></Card.Link>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{dayAuthor.name}</Card.Title>
              <Card.Subtitle className="text-muted mb-4">{`${dayAuthor.birthDate} – ${dayAuthor.deathDate}`}</Card.Subtitle>
              <Link to={`${dayAuthor.path}`}>{t('More about...')}</Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

DayAuthor.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withTranslation()(DayAuthor);
