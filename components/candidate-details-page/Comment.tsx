"use client";
import React, { Fragment, useState } from "react";
import { Button, ListGroup, Offcanvas } from "react-bootstrap";

const CandidateDetailsComment = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Button
        variant="secondary"
        type="button"
        data-bs-toggle="offcanvas"
        onClick={handleShow}
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="bi bi-chat-square-dots me-1"></i> Show Comments
      </Button>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel1"
      >
        <Offcanvas.Header
          closeButton
          className="border-bottom border-block-end-dashed"
        >
          <h5 className="offcanvas-title" id="offcanvasRightLabel1">
            Comments
          </h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div>
            <ListGroup as="ul" className="list-group-flush mb-0">
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-primary avatar-rounded">
                      NW
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      New Website Created
                      <span className="badge bg-light text-muted float-end">
                        20 Nov 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      30 mins ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-danger avatar-rounded">
                      CH
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Prepare for the new project
                      <span className="badge bg-light text-muted float-end">
                        3 Jan 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      2 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-info avatar-rounded">
                      S
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Decide the live discussion
                      <span className="badge bg-light text-muted float-end">
                        17 Feb 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      3 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md avatar-rounded">
                      <img src="../../assets/images/faces/12.jpg" alt="" />
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Meeting at 3:00 pm
                      <span className="badge bg-light text-muted float-end">
                        29 Dec 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      4 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-success avatar-rounded">
                      RC
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Prepare for presentation
                      <span className="badge bg-light text-muted float-end">
                        31 Dec 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      4 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md avatar-rounded">
                      <img src="../../assets/images/faces/1.jpg" alt="" />
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Brenda New product launching
                      <span className="badge bg-light text-muted float-end">
                        1 Jan 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      7 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                      M
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Medeleine Hey! there i'm available
                      <span className="badge bg-light text-muted float-end">
                        5 Jan 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      3 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-info avatar-rounded">
                      OL
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Olivia New schedule release
                      <span className="badge bg-light text-muted float-end">
                        6 Jan 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      45 mins ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-warning avatar-rounded">
                      A
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Kamala Preparing for new admin launch
                      <span className="badge bg-light text-muted float-end">
                        7 Jan 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      28 mins ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md avatar-rounded">
                      <img src="../../assets/images/faces/6.jpg" alt="" />
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Oisha Meeting with clinet for dinner
                      <span className="badge bg-light text-muted float-end">
                        10 Jan 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      14 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-danger avatar-rounded">
                      CH
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Prepare for the new project
                      <span className="badge bg-light text-muted float-end">
                        3 Jan 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      2 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-info avatar-rounded">
                      S
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Decide the live discussion
                      <span className="badge bg-light text-muted float-end">
                        17 Feb 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      3 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md avatar-rounded">
                      <img src="../../assets/images/faces/14.jpg" alt="" />
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Meeting at 3:00 pm
                      <span className="badge bg-light text-muted float-end">
                        29 Dec 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      4 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <span className="avatar avatar-md bg-success avatar-rounded">
                      RC
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-medium mb-0">
                      Prepare for presentation
                      <span className="badge bg-light text-muted float-end">
                        31 Dec 2024
                      </span>
                    </p>
                    <span className="fs-12 text-muted">
                      <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                      4 hrs ago
                    </span>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

export default CandidateDetailsComment;
