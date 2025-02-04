import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/Lawyers.css';

const LawyersCard = ({ lawyer }) => {
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src={lawyer.image_url}
        alt={lawyer.name}
        className="custom-card-img"
      />
      <Card.Body className="custom-card-body" style={{ fontSize: "1.1rem" }}>
        <Card.Title>Name: {lawyer.name}</Card.Title>
        <Card.Text>Years of Experience: {lawyer.experience} years</Card.Text>
        <Card.Text>Specialization: {lawyer.specialization}</Card.Text>
        <Card.Text>Rate: KES {lawyer.rate_per_hour}/hour</Card.Text>
        <div className="d-flex">
          <div className="w-100">
            <Link to={`/lawyers/${lawyer.id}`} className="d-block">
              <Button variant="primary" className="w-100">View Details</Button>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LawyersCard;
