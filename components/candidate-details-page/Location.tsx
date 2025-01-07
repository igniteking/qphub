import React from "react";
import { Card } from "react-bootstrap";

const Location = () => {
  return (
    <Card className="custom-card">
      <Card.Header>
        <Card.Title>Location</Card.Title>
      </Card.Header>
      <Card.Body>
        <p>
          <span className="fw-medium">Jaipur : </span>Current / Preferred
        </p>
        <p>
          <span className="fw-medium">Delhi : </span>Preferred
        </p>
        <p className="mb-0">
          <span className="fw-medium">Mumbai : </span>Preferred
        </p>
      </Card.Body>
    </Card>
  );
};

export default Location;
