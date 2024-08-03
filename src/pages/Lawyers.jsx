import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import LawyersCard from "../components/LawyersCard";
import LawyersNavbar from "../components/LawyersNavbar";
import LawyersSearch from "../components/LawyersSearch";
import '../css/Lawyers.css';

function Lawyers({ lawyers = [] }) {
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers);

  const handleSearch = (query) => {
    console.log("Search Query:", query); 
    const filtered = lawyers.filter(lawyer => 
      lawyer.name.toLowerCase().includes(query.toLowerCase()) ||
      lawyer.specialization.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered Lawyers:", filtered); 
    setFilteredLawyers(filtered);
  };

  return (
    <Container>
      <Header />
      <LawyersNavbar />
      <Row className="mt-3 search-container">
        <Col>
          <LawyersSearch onSearch={handleSearch} />
        </Col>
      </Row>
      <Row className="mt-3">
        {filteredLawyers.length > 0 ? (
          filteredLawyers.map((lawyer) => (
            <Col key={lawyer.id} md={4} className="mb-5">
              <LawyersCard lawyer={lawyer} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No lawyers found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Lawyers;
