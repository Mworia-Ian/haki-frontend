import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Lawyers.css";

function Header() {
  return (
    <Container className="header">
      <Row className="justify-content-center">
        <Col xs="auto">
          <h1 className='text-center' style={{ textDecoration: "underline" }}>
            LAWYERS
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
