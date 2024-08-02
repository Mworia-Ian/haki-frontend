// LawyerDetails.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Alert } from "react-bootstrap";

function LawyerDetails({ lawyer }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  if (!lawyer) {
    return (
      <Container className="mt-5">
        <Alert variant="warning">Lawyer not found</Alert>
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
          <div
            className="lawyer-card"
            style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <img
              src={lawyer.image_url}
              alt={lawyer.name}
              className="lawyer-image"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                borderRadius: "50%",
              }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div
            className="lawyer-card"
            style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <h2
              style={{
                fontSize: "3.0rem",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
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
              {/* Example: <Review lawyerId={lawyer.id} /> */}
              {/* Example: <ReserveLawyer lawyerId={lawyer.id} userId={1} /> */}
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
