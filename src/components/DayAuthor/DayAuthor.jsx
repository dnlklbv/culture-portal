import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DayAuthor = () => {
  const authors = [];
  const randomAuthor = (authorsList) => {
    const randomIndex = Math.floor(Math.random() * authorsList.length);
    return authorsList[randomIndex];
  };

  const dayAuthor = randomAuthor(authors);

  const authorCard = (
    <Card>
      <Row>
        <Col md={4}>
          <Card.Img src={dayAuthor.img} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{dayAuthor.name}</Card.Title>
            <Card.Subtitle className="text-muted">{dayAuthor.date}</Card.Subtitle>
            <Card.Text>{dayAuthor.shortDescription}</Card.Text>
            <Card.Link href="#">More about...</Card.Link>
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
