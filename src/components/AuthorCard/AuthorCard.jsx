import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

import AuthorTimeline from '../AuthorTimeline';
import AuthorWorks from '../AuthorWorks';
import AuthorGallery from '../AuthorGallery';


const AuthorCard = ({ data }) => {
  const {
    name, description, birth, death, genre, literaryMovement,
  } = data;
  return (
    <Container>
      <Row className="mb-5">
        <Col className="pl-0" md={{ span: 4 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Maxim_Bogdanovich_by_Valentin_Volkov_1927.JPG/220px-Maxim_Bogdanovich_by_Valentin_Volkov_1927.JPG"
            alt="img"
            width="100%"
          />
        </Col>
        <Col>
          <Card border="light">
            <Card.Body>
              <Card.Title>
                {name}
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {description}
              </Card.Subtitle>
              <Card.Text>
                <Table borderless="true" size="sm">
                  <tr>
                    <th className="pl-0">Born:</th>
                    <td>{ birth }</td>
                  </tr>
                  <tr>
                    <th className="pl-0">Died:</th>
                    <td>{ death }</td>
                  </tr>
                  <tr>
                    <th className="pl-0">Genre:</th>
                    <td>{ genre }</td>
                  </tr>
                  <tr>
                    <th className="pl-0">Literary movement:</th>
                    <td>{ literaryMovement }</td>
                  </tr>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="pl-0">
          <h2>Biography</h2>
          <AuthorTimeline />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="pl-0">
          <h2 className="mb-4">Works</h2>
          <AuthorWorks />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Gallery</h2>
          <AuthorGallery />
        </Col>
      </Row>
    </Container>
  );
};

AuthorCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
    genre: PropTypes.string,
    literaryMovement: PropTypes.string,
  }).isRequired,
};

export default AuthorCard;
