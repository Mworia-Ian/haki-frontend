// Lawyers.jsx
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import LawyersCard from "../components/LawyersCard";
import LawyersNavbar from "../components/LawyersNavbar";
import LawyersSearch from "../components/LawyersSearch";
import '../css/Lawyers.css';

function Lawyers({ lawyers = [] }) {
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (query) => {
    const filtered = lawyers.filter((lawyer) =>
      lawyer.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLawyers(filtered);
    setNoResults(filtered.length === 0); // Update state based on search results
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="bg-light">
          <LawyersNavbar />
        </Col>
        <Col xs={10} className="text-center text-md-left bg-light">
          <Header />
          <LawyersSearch onSearch={handleSearch} />
          <Container>
            <Row>
              {noResults ? (
                <Col className="text-center">
                  <p className="text-dark" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Lawyer not found.</p>
                </Col>
              ) : (
                filteredLawyers.map((lawyer) => (
                  <Col md={6} lg={4} key={lawyer.id} className="mb-4">
                    <LawyersCard lawyer={lawyer} />
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Lawyers;
