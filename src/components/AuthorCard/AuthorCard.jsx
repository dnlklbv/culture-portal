import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import AuthorTimeline from '../AuthorTimeline';
import AuthorWorks from '../AuthorWorks';
import AuthorGallery from '../AuthorGallery';
import AuthorVideo from '../AuthorVideo';
import AuthorMap from '../AuthorMap';

const AuthorCard = ({ t, data, i18n }) => {
  let lng = i18n.language;
  if (i18n.language === 'en-GB') {
    lng = 'en';
  } else if (i18n.language === 'be-BY') {
    lng = 'by';
  } else if (i18n.language === 'ru-RU') {
    lng = 'ru';
  }
  const lngData = data[lng];
  const {
    name, imgSrc, birthDate, deathDate, bio, works, gallery, videoId, map,
  } = lngData;
  return (
    <Container>
      <Row className="mb-5">
        <Col className="pl-0" md={{ span: 4 }}>
          <img
            src={imgSrc}
            alt="img"
            width="100%"
          />
        </Col>
        <Col>
          <Card border="light">
            <Card.Body>
              <Card.Title>
                { name }
              </Card.Title>
              <Table borderless="true" size="sm">
                <tbody>
                  <tr>
                    <th className="pl-0">
                      {t('Born')}
                    :
                    </th>
                    <td>{birthDate}</td>
                  </tr>
                  <tr>
                    <th className="pl-0">
                      {t('Died')}
                    :
                    </th>
                    <td>{deathDate}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="pl-0">
          <h2>{t('Biography')}</h2>
          <AuthorTimeline bio={bio} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="pl-0">
          <h2 className="mb-4">{t('Works')}</h2>
          <AuthorWorks works={works} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">{t('Gallery')}</h2>
          <AuthorGallery gallery={gallery} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">{t('Video')}</h2>
          <AuthorVideo videoId={videoId} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">{t('Map')}</h2>
          <AuthorMap coordinates={map} />
        </Col>
      </Row>
    </Container>
  );
};

AuthorCard.propTypes = {
  i18n: PropTypes.shape({
    language: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    imgSrc: PropTypes.string,
    birthDate: PropTypes.string,
    deathDate: PropTypes.string,
    videoId: PropTypes.string,
    bio: PropTypes.array,
    works: PropTypes.array,
    gallery: PropTypes.array,
    map: PropTypes.array,
  }).isRequired,
};

export default withTranslation()(AuthorCard);
