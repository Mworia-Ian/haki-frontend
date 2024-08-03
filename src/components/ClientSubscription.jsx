import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const ClientSubscription = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Subscription Plan</Card.Title>
        <Card.Text>
          Enjoy unlimited access to our premium content with this subscription plan.
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> $9.99/month
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Pay with:</ListGroupItem>
        <ListGroupItem>
          <Button variant="outline-primary" className="w-100 mb-2">
            Mpesa
          </Button>
        </ListGroupItem>
        <ListGroupItem>
          <Button variant="outline-primary" className="w-100 mb-2">
            PayPal
          </Button>
        </ListGroupItem>
        <ListGroupItem>
          <Button variant="outline-primary" className="w-100">
            Visa Card
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ClientSubscription;
