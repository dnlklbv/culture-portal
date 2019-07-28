import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DayAuthor = () => {
  const authorCard = (
    <Card>
      <Row>
        <Col md={4}>
          <Card.Img />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{}</Card.Title>
            <Card.Subtitle className="text-muted">{}</Card.Subtitle>
            <Card.Text>{}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );

  return (
    <>
      <h2 className="mb-4">Author of the day:</h2>
      {authorCard}
    </>
  );
};
export default DayAuthor;
