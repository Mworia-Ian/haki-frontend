import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Lawyers.css";

function Header() {
  return (
    <div className="header">
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
          <h1 className="text-center" style={{ color: 'black', textDecoration: 'underline' }}>
            LAWYERS
          </h1>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Header;
