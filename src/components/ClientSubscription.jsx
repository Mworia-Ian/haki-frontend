import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import LawyersNavbar from '../components/LawyersNavbar';
import '../css/Lawyers.css';

function ClientSubscription() {
  return (
    <div>
      <LawyersNavbar />
      <Container className="text-center mt-5">
        <h1 className="mb-4">Subscribe to Our Service</h1>
        <Card className="subscription-card mx-auto" style={{ width: '50%' }}>
          <Card.Body>
            <Card.Title>Premium Subscription</Card.Title>
            <Card.Text>
              Get access to exclusive content and features by subscribing to our premium service. Enjoy additional benefits and stay updated with the latest in the legal field.
            </Card.Text>
            <Button variant="primary">Subscribe Now</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ClientSubscription;
