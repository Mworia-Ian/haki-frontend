import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

function LawyerDetails({ lawyers }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  // const lawyer = lawyers.find((lawyer) => lawyer.id === parseInt(id));
  const lawyer = dummyLawyers.find((lawyer) => lawyer.id === parseInt(id, 10)); 
  

  if (!lawyer) {
    return (
      <Container className="mt-5">
        <p className="text-white">Lawyer not found.</p>
      </Container>
    );
  }

  return (
    <Container className="mb-5 mt-3 text-white">
      <Button
        onClick={() => navigate(-1)}
        className="mb-3"
        style={{ width: "100px" }}
      >
        Back
      </Button>
      <Row>
        <Col md={6}>
          <div className="lawyer-card" style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <img
              src={lawyer.image_url}
              alt={lawyer.name}
              className="lawyer-image"
              style={{ width: "100%", height: "auto", maxHeight: "80vh", borderRadius: "50%" }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="lawyer-card" style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "3.0rem", fontWeight: "bold", textDecoration: "underline" }}>
              {lawyer.name}
            </h2>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Specialization:</strong> {lawyer.specialization}
            </p>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Years of Experience:</strong> {lawyer.experience}
            </p>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Rate per Hour:</strong> ${lawyer.rate_per_hour}
            </p>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Description:</strong> {lawyer.description}
            </p>
            <div className="mb-4">
              {/* Include additional components or actions related to lawyers here */}
            </div>
          </div>
        </Col>
      </Row>
      {/* Modal for additional actions */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>The action has been completed successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default LawyerDetails;
