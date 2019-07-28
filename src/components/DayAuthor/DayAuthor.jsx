import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DayAuthor = () => {
  const authors = [
    {
      name: 'Maksim Adamavič Bahdanovič',
      img: 'https://www.syl.ru/misc/i/ai/289376/1586801.jpg',
      date: '27 November (9 December) 1891 – 12 (25) May 1917',
      shortDescription: 'Was a Belarusian poet, journalist, translator, literary critic and historian of literature. He is considered as one of the founders of the modern Belarusian literature.',
    },
    {
      name: 'Yanka Kupala (Iván Daminíkavich Lutsévich)',
      img: 'https://24smi.org/public/media/resize/800x-/celebrity/2018/12/06/ofy1rxpievtc-ianka-kupala.jpg',
      date: '7 July (25 June) 1882 – 28 June 1942',
      shortDescription: 'A Belarussian poet and writer. Kupala is considered one of the greatest Belarusian-language writers of the 20th century.',
    },
  ];
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
