import Link from "next/link";
import React from "react";
import { Card, CardBody, CardFooter, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const DetailsCard = () => {
  return (
    <Col xl={12}>
      <Card className="custom-card">
        <CardBody>
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
                  <i className="bi bi-envelope-arrow-up text-muted me-1"></i> 12
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
                <i className="bi bi-clock text-muted me-1"></i> Immediate Joinee
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
          <Row>
            <Col lg={6}>
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
                <span className="text-muted"> Current Comapny :</span>{" "}
                <span className="fw-medium"> BIMQP</span>
              </p>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
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
              <i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted
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
        </CardFooter>
      </Card>
    </Col>
  );
};

export default DetailsCard;
