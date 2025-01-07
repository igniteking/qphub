import Link from "next/link";
import React from "react";
import { Card, CardBody, Col } from "react-bootstrap";

const ShareProfile = () => {
  return (
    <Card className="custom-card border bg-primary-transparent shadow-none">
      <CardBody>
        <div className="row align-items-center">
          <Col lg={6}>
            <h5 className="fw-medium mb-0">
              &#128400; Was this profile fit for someone?
            </h5>
          </Col>
          <Col lg={6} className="text-end">
            <Link
              scroll={false}
              href="#!"
              className="btn btn-success btn-lg"
              role="button"
            >
              <i className="ri-share-line me-2"></i>Share Now
            </Link>
          </Col>
        </div>
      </CardBody>
    </Card>
  );
};

export default ShareProfile;
