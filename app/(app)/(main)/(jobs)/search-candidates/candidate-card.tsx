import React from "react";
import { Card, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import Link from "next/link";

interface Candidate {
  email: string;
  mobile: string;
  resume_file?: string;
  name: string;
  designation: string;
  location: string;
  profile_summary: string;
}

const CandidateCard = ({ candidate }: { candidate: Candidate }) => {
  if (!candidate) {
    return <p>No candidate data available.</p>;
  }

  return (
    <Col xl={12}>
      <Card className="custom-card">
        <Card.Body>
          <div className="btn-list float-end">
            {/* Email */}
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{candidate.email}</Tooltip>}
            >
              <Link
                scroll={false}
                href={`mailto:${candidate.email}`}
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-envelope-arrow-up text-muted me-1"></i>{" "}
                  Email
                </span>
              </Link>
            </OverlayTrigger>

            {/* Mobile */}
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{candidate.mobile}</Tooltip>}
            >
              <Link
                scroll={false}
                href={`tel:${candidate.mobile}`}
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-telephone-outbound text-muted me-1"></i>{" "}
                  Call
                </span>
              </Link>
            </OverlayTrigger>

            {/* Download Resume */}
            {candidate.resume_file ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Download Resume</Tooltip>}
              >
                <Link
                  scroll={false}
                  href={candidate.resume_file}
                  className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white"
                  target="_blank"
                >
                  <span>
                    <i className="bi bi-download"></i>
                  </span>
                </Link>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>No Resume Available</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white"
                >
                  <span>
                    <i className="bi bi-x-circle"></i>
                  </span>
                </Link>
              </OverlayTrigger>
            )}

            {/* View Profile */}
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>View Profile</Tooltip>}
            >
              <Link
                scroll={false}
                href="#!"
                className="avatar avatar-rounded avatar-sm bg-light text-default border"
              >
                <span>
                  <i className="bi bi-eye"></i>
                </span>
              </Link>
            </OverlayTrigger>
          </div>

          {/* Candidate Details */}
          <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
            <div>
              <span className="avatar avatar-lg avatar-rounded">
                <img src="../../../assets/images/faces/1.jpg" alt="Candidate" />
              </span>
            </div>
            <div>
              <h5 className="fw-medium mb-0 d-flex align-items-center">
                <Link scroll={false} href="/candidate-details/">
                  {candidate.name}
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Verified Candidate</Tooltip>}
                  >
                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1"></i>
                  </OverlayTrigger>
                </Link>
              </h5>
              <div className="d-flex gap-2 flex-wrap">
                <Link scroll={false} href="#!">
                  {candidate.designation}
                </Link>
                <p className="mb-0 fs-12 text-muted">
                  <i className="bi bi-geo-alt fs-11"></i> {candidate.location}
                </p>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="d-flex align-items-center flex-wrap gap-3 mb-4 text-muted">
            {candidate.profile_summary}
          </div>

          {/* Education & Languages */}
          <Row>
            <Col lg={6}>
              <p className="mb-0 flex-grow-1">
                <span className="text-muted">Education :</span>
                <span className="fw-medium"> B.TECH Architecture</span>
              </p>
            </Col>
            <Col lg={6}>
              <p className="mb-0">
                <span className="text-muted">Languages :</span>
                <span className="fw-medium"> English, Hindi</span>
              </p>
            </Col>
          </Row>

          {/* Skills */}
          <Card.Footer>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <h6 className="mb-0 fw-medium">Skills :</h6>
              <div className="popular-tags flex-grow-1">
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  Python
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  JavaScript
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  React
                </Link>
              </div>
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CandidateCard;
