import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

const ToolsUsed = () => {
  return (
    <Card className="custom-card overflow-hidden">
      <CardHeader>
        <CardTitle>Tools Used</CardTitle>
      </CardHeader>
      <CardBody className="d-flex flex-wrap gap-2">
        <span className="avatar avatar-rounded me-3 bg-white shadow-sm border p-2">
          <img src="../../../assets/images/faces/10.jpg" alt="img" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
            2+
          </span>
        </span>
        <span className="avatar avatar-rounded me-3 bg-white shadow-sm border p-2">
          <img src="../../../assets/images/faces/10.jpg" alt="img" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
            4+
          </span>
        </span>
        <span className="avatar avatar-rounded me-3 bg-white shadow-sm border p-2">
          <img src="../../../assets/images/faces/10.jpg" alt="img" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
            1+
          </span>
        </span>
        <span className="avatar avatar-rounded me-3 bg-white shadow-sm border p-2">
          <img src="../../../assets/images/faces/10.jpg" alt="img" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
            7+
          </span>
        </span>
        <span className="avatar avatar-rounded me-3 bg-white shadow-sm border p-2">
          <img src="../../../assets/images/faces/10.jpg" alt="img" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
            12+
          </span>
        </span>
        <span className="avatar avatar-rounded bg-white shadow-sm border p-2">
          <img src="../../../assets/images/faces/10.jpg" alt="img" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
            25+
          </span>
        </span>
      </CardBody>
    </Card>
  );
};

export default ToolsUsed;
