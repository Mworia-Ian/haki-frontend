import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import LawyersNavbar from '../components/LawyersNavbar';
import '../css/Lawyers.css';

function ClientSubscription() {
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!mpesaNumber && !cardNumber && !paypalEmail) {
      setError('Please provide payment details.');
      return;
    }

    // Reset error and success messages
    setError('');
    setSuccess('');

    // Example of form submission - replace this with actual API call
    try {
      // Simulate form submission
      const response = await fetch('/api/submit-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mpesaNumber, cardNumber, paypalEmail }),
      });

      if (response.ok) {
        setSuccess('Payment details submitted successfully.');
      } else {
        setError('Failed to submit payment details. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <LawyersNavbar />
      <Container className="text-center mt-5">
        <h1 className="mb-4">Subscribe to Our Service</h1>
        <Card className="subscription-card mx-auto" style={{ width: '60%', backgroundColor: '#343a40', color: '#fff' }}>
          <Card.Body>
            <Card.Title>Premium Subscription</Card.Title>
            <Card.Text>
              Get access to exclusive content and features by subscribing to our premium service. Enjoy additional benefits and stay updated with the latest in the legal field.
            </Card.Text>
            {/* <Button variant="primary" className="mb-4">Subscribe Now</Button> */}
            <Card.Text>
              <strong>Payment Options:</strong>
            </Card.Text>
            <Row className="justify-content-center">
              <Col xs={12} md={4} className="payment-option">
              <Form.Group className="mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your PayPal email"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                  />
                </Form.Group>
                <Button variant="outline-light" className="w-100">
                  <FontAwesomeIcon icon={faPaypal} size="2x" /> PayPal
                </Button>
              </Col>
              <Col xs={12} md={4} className="payment-option">
              <Form.Group className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter your card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </Form.Group>
                <Button variant="outline-light" className="w-100">
                  <FontAwesomeIcon icon={faCcVisa} size="2x" /> Visa Card
                </Button>
              </Col>
              <Col xs={12} md={4} className="payment-option">
              <Form.Group className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter your M-Pesa number"
                    value={mpesaNumber}
                    onChange={(e) => setMpesaNumber(e.target.value)}
                  />
                </Form.Group>
                <Button variant="outline-light" className="w-100">
                  <FontAwesomeIcon icon={faMobileAlt} size="2x" /> M-Pesa
                </Button>
              </Col>
            </Row>
            <Button variant="primary" className="mt-4" onClick={handleSubmit}>Submit Payment</Button>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            {success && <Alert variant="success" className="mt-3">{success}</Alert>}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ClientSubscription;
