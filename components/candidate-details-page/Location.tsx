import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

const Location = () => {
  return (
    <Card className="custom-card">
      <CardHeader>
        <CardTitle>Location</CardTitle>
      </CardHeader>
      <CardBody>
        <p>
          <span className="fw-medium">Jaipur : </span>Current / Preferred
        </p>
        <p>
          <span className="fw-medium">Delhi : </span>Preferred
        </p>
        <p className="mb-0">
          <span className="fw-medium">Mumbai : </span>Preferred
        </p>
      </CardBody>
    </Card>
  );
};

export default Location;
