import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LawyersCard from "../components/LawyersCard";

function Lawyers({ lawyers = [] }) {
  return (
    <Container>
      <Row className="mt-3">
        {lawyers.length > 0 ? (
          lawyers.map((lawyer) => (
            <Col key={lawyer.id} md={4} className="mb-5">
              <LawyersCard lawyer={lawyer} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No lawyers available.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Lawyers;
