import React from "react";
import { Card, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import Link from "next/link";

interface Candidate {
  id: number;
  email: string;
  mobile: string;
  resume_file?: string;
  name: string;
  designation: string;
  location: string;
  profile_summary: string;
  highest_degree: string;
  skills: string[];
  total_experience: number;
  nationality: string;
  year_of_experience: number;
  languages_known: string[];
}

const CandidateCard = ({ candidate }: { candidate: Candidate }) => {
  if (!candidate) {
    return <p>No candidate data available.</p>;
  }

  return (
    <Row>
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
                  <img
                    src="../../../assets/images/faces/1.jpg"
                    alt="Candidate"
                  />
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
                <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                  <p className="fs-12 mb-0">Ratings : </p>
                  <div className="min-w-fit-content ms-2">
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-half"></i>
                    </span>
                  </div>
                  <Link
                    scroll={false}
                    href="#!"
                    className="ms-1 min-w-fit-content text-muted"
                  >
                    <span>(142)</span>
                    <span>Ratings</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="popular-tags mb-4">
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-mortarboard text-muted me-1"></i> Graduate
                </span>
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-moon-stars text-muted me-1"></i>{" "}
                  flexible-shift
                </span>
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-clock text-muted me-1"></i> Immediate
                  Joinee
                </span>
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-broadcast text-muted me-1"></i> Good at
                  English
                </span>
              </Link>
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
                  <span className="fw-medium" data-bs-toggle="tooltip">
                    {" "}
                    {candidate.highest_degree}
                  </span>
                </p>
                <p className="mb-0 flex-grow-1">
                  <span className="text-muted">Package (Yearly) :</span>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Current</Tooltip>}
                  >
                    <span
                      className="fw-medium"
                      data-bs-toggle="tooltip"
                      title="Current"
                    >
                      {" "}
                      $2,300
                    </span>
                  </OverlayTrigger>{" "}
                  -
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Expected</Tooltip>}
                  >
                    <span
                      className="fw-medium"
                      data-bs-toggle="tooltip"
                      title="Expected"
                    >
                      {" "}
                      $3,678
                    </span>
                  </OverlayTrigger>
                </p>
              </Col>
              <Col lg={6}>
                <p className="mb-0">
                  <span className="text-muted"> Prefered Location :</span>{" "}
                  <span className="fw-medium">
                    {" "}
                    Jaipur, Delhi, Mumbai, Kolkata, Gurugram
                  </span>
                </p>
                <p className="mb-0">
                  <span className="text-muted"> Languages :</span>{" "}
                  <span className="fw-medium"> English, Hindi, Telugu</span>
                </p>
              </Col>
            </Row>

            <div className="mt-1">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>1 year bond accepted</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-info-transparent me-1"
                  data-bs-toggle="tooltip"
                  title="1 year bond accepted"
                >
                  <i className="bi bi-hand-thumbs-up me-1"></i>1 year bond
                  accepted
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Exp : {candidate.year_of_experience} Years</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-primary-transparent me-1"
                >
                  <i className="bi bi-briefcase me-1"></i>Exp : {candidate.year_of_experience} Years
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Nationality : {candidate.nationality}</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-secondary-transparent"
                >
                  <i className="bi bi-briefcase me-1"></i>
                  Nationality : {candidate.nationality}
                </Link>
              </OverlayTrigger>
            </div>
          </Card.Body>

          {/* Skills */}
          <Card.Footer>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <h6 className="mb-0 fw-medium">Skills :</h6>
              <div className="popular-tags flex-grow-1">
                {candidate.skills.map((skill) => (
                  <Link
                    key={skill}
                    scroll={false}
                    href="#!"
                    className="badge rounded-pill bg-light text-default me-1"
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            </div>
          </Card.Footer>
        </Card>
      </Col>
      {/* <Col xl={12}>
        <Card className="custom-card">
          <Card.Body>
            <div className="btn-list float-end">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>email@email.com</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  <span className="fs-14">
                    <i className="bi bi-envelope-arrow-up text-muted me-1"></i>{" "}
                    12
                  </span>
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>+91-1234567890</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  <span className="fs-14">
                    <i className="bi bi-telephone-outbound text-muted me-1"></i>{" "}
                    12
                  </span>
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Download Resume</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white"
                  aria-label="Download Resume"
                >
                  <span>
                    <i className="bi bi-download"></i>
                  </span>
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Add to Shortlist</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-rounded avatar-sm bg-light text-default border"
                  aria-label="Add to Wishlist"
                >
                  <span>
                    <i className="bi bi-heart"></i>
                  </span>
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>View Profile</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-rounded avatar-sm bg-light text-default border"
                  aria-label="View Profile"
                >
                  <span>
                    <i className="bi bi-eye"></i>
                  </span>
                </Link>
              </OverlayTrigger>
            </div>
            <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
              <div>
                <span className="avatar avatar-lg avatar-rounded">
                  <img src="../../../assets/images/faces/1.jpg" alt="" />
                </span>
              </div>
              <div>
                <h5 className="fw-medium mb-0 d-flex align-items-center">
                  <Link scroll={false} href="/candidate-details/">
                    {" "}
                    Charlotte
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Verified candidate</Tooltip>}
                    >
                      <i
                        className="bi bi-check-circle-fill text-success fs-16 ms-1 ms-1"
                        data-bs-toggle="tooltip"
                        title="Verified candidate"
                      ></i>
                    </OverlayTrigger>
                  </Link>
                </h5>
                <div className="d-flex gap-2 flex-wrap">
                  <Link scroll={false} href="#!">
                    UI Developer
                  </Link>
                  <p className="mb-0 fs-12 text-muted">
                    <i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad
                  </p>
                </div>
                <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                  <p className="fs-12 mb-0">Ratings : </p>
                  <div className="min-w-fit-content ms-2">
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-half"></i>
                    </span>
                  </div>
                  <Link
                    scroll={false}
                    href="#!"
                    className="ms-1 min-w-fit-content text-muted"
                  >
                    <span>(142)</span>
                    <span>Ratings</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="popular-tags mb-4">
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-mortarboard text-muted me-1"></i> Graduate
                </span>
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-moon-stars text-muted me-1"></i>{" "}
                  flexible-shift
                </span>
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-clock text-muted me-1"></i> Immediate
                  Joinee
                </span>
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <span className="fs-14">
                  <i className="bi bi-broadcast text-muted me-1"></i> Good at
                  English
                </span>
              </Link>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-3 mb-4 text-muted">
              Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit
              ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit
              ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed
              ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus
              minima facilis.
            </div>
            <Row>
              <Col lg={6}>
                <p className="mb-0 flex-grow-1">
                  <span className="text-muted">Education :</span>
                  <span className="fw-medium" data-bs-toggle="tooltip">
                    {" "}
                    B.TECH Architecture
                  </span>
                </p>
                <p className="mb-0 flex-grow-1">
                  <span className="text-muted">Package (Yearly) :</span>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Current</Tooltip>}
                  >
                    <span
                      className="fw-medium"
                      data-bs-toggle="tooltip"
                      title="Current"
                    >
                      {" "}
                      $2,300
                    </span>
                  </OverlayTrigger>{" "}
                  -
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Expected</Tooltip>}
                  >
                    <span
                      className="fw-medium"
                      data-bs-toggle="tooltip"
                      title="Expected"
                    >
                      {" "}
                      $3,678
                    </span>
                  </OverlayTrigger>
                </p>
              </Col>
              <Col lg={6}>
                <p className="mb-0">
                  <span className="text-muted"> Prefered Location :</span>{" "}
                  <span className="fw-medium">
                    {" "}
                    Jaipur, Delhi, Mumbai, Kolkata, Gurugram
                  </span>
                </p>
                <p className="mb-0">
                  <span className="text-muted"> Languages :</span>{" "}
                  <span className="fw-medium"> English, Hindi, Telugu</span>
                </p>
              </Col>
            </Row>

            <div className="mt-1">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>1 year bond accepted</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-info-transparent me-1"
                  data-bs-toggle="tooltip"
                  title="1 year bond accepted"
                >
                  <i className="bi bi-hand-thumbs-up me-1"></i>1 year bond
                  accepted
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Exp : 2 Years</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-primary-transparent me-1"
                >
                  <i className="bi bi-briefcase me-1"></i>Exp : 2 Years
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Nationality : Indian</Tooltip>}
              >
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-secondary-transparent"
                >
                  <i className="bi bi-briefcase me-1"></i>
                  Nationality : Indian
                </Link>
              </OverlayTrigger>
            </div>
          </Card.Body>
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
                  Java
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  React
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-primary-transparent"
                >
                  More
                </Link>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </Col> */}
    </Row>
  );
};

export default CandidateCard;
