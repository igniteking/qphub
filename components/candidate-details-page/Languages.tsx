import React from "react";
import { Badge, Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from "react-bootstrap";

const Languages = () => {
  return (
    <Card className="custom-card">
      <CardHeader>
        <CardTitle>Languages</CardTitle>
      </CardHeader>
      <CardBody>
        <Row className="align-items-center">
          <Col
            lg={3}
            className="d-flex justify-content-between align-items-center"
          >
            <span className="fw-medium">English :</span>
          </Col>
          <Col lg={9} className="d-flex justify-content-between">
            <Button
              variant="outline-primary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Read{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Write{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-info"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Speak{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            lg={3}
            className="d-flex justify-content-between align-items-center"
          >
            <span className="fw-medium">Hindi :</span>
          </Col>
          <Col lg={9} className="d-flex justify-content-between">
            <Button
              variant="outline-primary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Read{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Write{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-info"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Speak{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            lg={3}
            className="d-flex justify-content-between align-items-center"
          >
            <span className="fw-medium">Tamil :</span>
          </Col>
          <Col lg={9} className="d-flex justify-content-between">
            <Button
              variant="outline-primary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Read{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Write{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-info"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Speak{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            lg={3}
            className="d-flex justify-content-between align-items-center"
          >
            <span className="fw-medium">Telugu :</span>
          </Col>
          <Col lg={9} className="d-flex justify-content-between">
            <Button
              variant="outline-primary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Read{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Write{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
            <Button
              variant="outline-info"
              type="button"
              size="sm"
              className="btn my-1"
            >
              Speak{" "}
              <Badge bg="" className="badge ms-2">
                4
              </Badge>
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Languages;
