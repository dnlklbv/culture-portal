import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AuthorTimeline from '../AuthorTimeline';

const AuthorCard = () => (
  <Container>
    <Row className="mb-5">
      <Col className="pl-0"  md={{ span: 4 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Maxim_Bogdanovich_by_Valentin_Volkov_1927.JPG/220px-Maxim_Bogdanovich_by_Valentin_Volkov_1927.JPG"
          alt="img"
          width="100%"
        />
      </Col>
      <Col>
        <Card border="light">
          <Card.Body>
            <Card.Title>Maksim Bahdanovich</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">poet, publicist, translator, literary critic</Card.Subtitle>
            <Card.Text>
              <Table borderless="true" size="sm">
                <tr>
                  <th className="pl-0">Born:</th>
                  <td>9 December 1891</td>
                </tr>
                <tr>
                  <th className="pl-0">Died:</th>
                  <td>25 May 1917</td>
                </tr>
                <tr>
                  <th className="pl-0">Genre:</th>
                  <td>verse, poem</td>
                </tr>
                <tr>
                  <th className="pl-0">Literary movement:</th>
                  <td>impressionism, symbolism</td>
                </tr>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col className="pl-0" >
        <h2>Biography</h2>
        <AuthorTimeline />
      </Col>
    </Row>
  </Container>
);

export default AuthorCard;
