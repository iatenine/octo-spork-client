import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Details() {
  return (
    <>
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <img src='*' alt="rep" />
          <h3>Name/Role</h3>
        </Col>
        <Col> Data dump will go here</Col>
      </Row>
    </Container>
    <footer>
      <p>Contact this representative <a href='*'>here</a></p>
    </footer>
    </>
  );
}

export default Details;