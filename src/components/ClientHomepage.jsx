import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LawyersNavbar from '../components/LawyersNavbar';
import '../css/Lawyers.css';

function ClientHomepage() {
  return (
    <div>
      <LawyersNavbar />
      <Container 
        className="client-homepage-container text-center mt-5" 
        style={{ marginLeft: '150px' }} // Adjust this value based on your sidebar width
      >
        <h1 className="mb-4">Welcome to Our Lawyers Directory</h1>
        <div className="paragraph-container">
          <p className="mb-4" style={{ 
            fontSize: "1.2rem", 
            lineHeight: "1.6", 
            maxWidth: "800px", 
            margin: "0 auto",
            textAlign: "justify"
          }}>
            Discover a curated list of highly qualified and experienced lawyers, each specializing in various fields of law. Whether you need expert legal advice, skilled representation in court, or a comprehensive legal consultation, our directory connects you with professionals dedicated to meeting your needs. From family law and criminal defense to corporate law and personal injury, find the right legal expert to guide you through your case and ensure your rights are protected. Our user-friendly platform simplifies your search, allowing you to make informed decisions with confidence. Explore our directory today and take the first step towards resolving your legal matters with ease.
          </p>
        </div>
        <Link to="/subscribe">
          <Button 
            variant="primary" 
            style={{ fontSize: "1.2rem", padding: "10px 20px" }}
          >
            Subscribe Now
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default ClientHomepage;
