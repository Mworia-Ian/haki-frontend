import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LawyersCard from "./LawyersCard";

function Lawyers({ lawyers }) {
  return (
    <Container>
      <Row className="mt-3">
        {lawyers.map((lawyer) => (
          <Col key={lawyer.id} md={4} className="mb-5">
            <LawyersCard lawyer={lawyer} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Lawyers;
