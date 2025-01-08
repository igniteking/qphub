import Link from "next/link";
import React from "react";
import { Card, CardBody, CardFooter, OverlayTrigger, Tooltip } from "react-bootstrap";

const RelatedProfiles = () => {
  return (
    <div>
      <h4 className="fw-medium mb-0">Related Profiles</h4>
      <p className="">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className="swiper-related-jobs">
        <Card className="custom-card">
          <CardBody>
            <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
              <div>
                <span className="avatar avatar-lg avatar-rounded">
                  <img src="../../../assets/images/faces/1.jpg" alt="" />
                </span>
              </div>
              <div className="flex-fill">
                <h5 className="fw-medium mb-0 d-flex align-items-center">
                  <a href="#!">
                    {" "}
                    Brenda Simpson
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Verified candidate</Tooltip>}
                    >
                      <i className="bi bi-check-circle-fill text-success fs-16 ms-1 d-inline-flex"></i>
                    </OverlayTrigger>
                  </a>
                </h5>
                <div className="d-flex gap-2">
                  <Link scroll={false} href="#!">
                    Software Developer
                  </Link>
                  <p className="mb-0 fs-12 text-muted">
                    <i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad
                  </p>
                </div>
                <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                  <p className="fs-12 mb-0">Ratings : </p>
                  <div className="min-w-fit-content ms-2">
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
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
              <div className="btn-list">
                <span className="fw-medium">$10,000</span>
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-primary text-fixed-white ms-1"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Download Resume</Tooltip>}
                  >
                    <span>
                      <i className="ri-download-2-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-light text-default"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Add to Wishlist</Tooltip>}
                  >
                    <span>
                      <i className="ri-heart-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-light text-default"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>View Profile</Tooltip>}
                  >
                    <span>
                      <i className="ri-eye-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
              </div>
            </div>
            <div className="popular-tags">
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-mortarboard text-muted me-1"></i> Graduate
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-moon-stars text-muted me-1"></i>{" "}
                flexible-shift
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-clock text-muted me-1"></i> Immediate Joinee
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-broadcast text-muted me-1"></i> Good at
                English
              </Link>
            </div>
          </CardBody>
          <CardFooter>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <h6 className="mb-0 fw-medium">Skills :</h6>
              <div className="popular-tags flex-grow-1">
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  HTML
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  CSS
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  Javascript
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  Angular
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-primary-transparent"
                >
                  <i className="bi bi-plus"></i> More
                </Link>
              </div>
              <div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>1 year bond accepted</Tooltip>}
                >
                  <Link
                    scroll={false}
                    href="#!"
                    className="badge badge-md rounded-pill bg-info-transparent"
                  >
                    <i className="bi bi-hand-thumbs-up me-1"></i>1 year bond
                    accepted
                  </Link>
                </OverlayTrigger>

                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-primary-transparent"
                >
                  <i className="bi bi-briefcase me-1"></i>Exp : 2 Years
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="custom-card">
          <CardBody>
            <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
              <div>
                <span className="avatar avatar-lg avatar-rounded">
                  <img src="../../../assets/images/faces/3.jpg" alt="" />
                </span>
              </div>
              <div className="flex-fill">
                <h5 className="fw-medium mb-0 d-flex align-items-center">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Verified candidate</Tooltip>}
                  >
                    <a href="#!">
                      {" "}
                      Dwayne Stort
                      <i className="bi bi-check-circle-fill text-success fs-16 ms-1 d-inline-flex"></i>
                    </a>
                  </OverlayTrigger>
                </h5>
                <div className="d-flex gap-2">
                  <Link scroll={false} href="#!">
                    Web Developer
                  </Link>
                  <p className="mb-0 fs-12 text-muted">
                    <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                    Hyderabad
                  </p>
                </div>
                <div className="d-flex align-items-center fs-12 text-muted  flex-wrap">
                  <p className="fs-12 mb-0">Ratings : </p>
                  <div className="min-w-fit-content ms-2">
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star"></i>
                    </span>
                  </div>
                  <Link
                    scroll={false}
                    href="#!"
                    className="mb-0 ms-1 min-w-fit-content text-muted"
                  >
                    <span>(35)</span>
                    <span>Ratings</span>
                  </Link>
                </div>
              </div>
              <div className="btn-list">
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-primary text-fixed-white ms-1"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Download Resume</Tooltip>}
                  >
                    <span>
                      <i className="ri-download-2-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-light text-default"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Add to Wishlist</Tooltip>}
                  >
                    <span>
                      <i className="ri-heart-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-light text-default"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>View Profile</Tooltip>}
                  >
                    <span>
                      <i className="ri-eye-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
              </div>
            </div>
            <div className="popular-tags">
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-mortarboard text-muted me-1"></i> Post
                Graduate
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-moon-stars text-muted me-1"></i>{" "}
                flexible-shift
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-clock text-muted me-1"></i> Within 10 Days
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-broadcast text-muted me-1"></i> Good at
                English
              </Link>
            </div>
          </CardBody>
          <CardFooter>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <h6 className="mb-0 fw-medium">Skills :</h6>
              <div className="popular-tags flex-grow-1">
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
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  Javascript
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  React Navtive
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge rounded-pill bg-primary-transparent"
                >
                  <i className="bi bi-plus"></i> More
                </Link>
              </div>
              <div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>2 years bond accepted</Tooltip>}
                >
                  <Link
                    scroll={false}
                    href="#!"
                    className="badge badge-md rounded-pill bg-info-transparent me-1"
                  >
                    <i className="bi bi-hand-thumbs-up me-1"></i>2 years bond
                    accepted
                  </Link>
                </OverlayTrigger>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-primary-transparent"
                >
                  <i className="bi bi-briefcase me-1"></i>Exp : 4 Years
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="custom-card">
          <CardBody>
            <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
              <div>
                <span className="avatar avatar-lg avatar-rounded">
                  <img src="../../../assets/images/faces/21.jpg" alt="" />
                </span>
              </div>
              <div className="flex-fill">
                <h5 className="fw-medium mb-0 d-flex align-items-center">
                  <a href="#!">
                    {" "}
                    Jasmine Kova
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Verified candidate</Tooltip>}
                    >
                      <i
                        className="bi bi-check-circle-fill text-success fs-16 ms-1 d-inline-flex"
                        title="Verified candidate"
                      ></i>
                    </OverlayTrigger>
                  </a>
                </h5>
                <div className="d-flex gap-2">
                  <Link scroll={false} href="#!">
                    Python Developer
                  </Link>
                  <p className="mb-0 fs-12 text-muted">
                    <i className="bi bi-geo-alt fs-11"></i> Gachibowli, Chennai
                  </p>
                </div>
                <div className="d-flex align-items-center fs-12 text-muted  flex-wrap">
                  <p className="fs-12 mb-0">Ratings : </p>
                  <div className="min-w-fit-content ms-2">
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star"></i>
                    </span>
                  </div>
                  <Link
                    scroll={false}
                    href="#!"
                    className="mb-0 ms-1 min-w-fit-content text-muted"
                  >
                    <span>(56)</span>
                    <span>Ratings</span>
                  </Link>
                </div>
              </div>
              <div className="btn-list">
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-primary text-fixed-white ms-1"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Download Resume</Tooltip>}
                  >
                    <span>
                      <i className="ri-download-2-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-light text-default"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Add to Wishlist</Tooltip>}
                  >
                    <span>
                      <i className="ri-heart-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="avatar avatar-sm avatar-rounded bg-light text-default"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>View Profile</Tooltip>}
                  >
                    <span>
                      <i className="ri-eye-line fs-13 align-middle"></i>
                    </span>
                  </OverlayTrigger>
                </Link>
              </div>
            </div>
            <div className="popular-tags">
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-mortarboard text-muted me-1"></i> MBA
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-moon-stars text-muted me-1"></i> Day-shift
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-clock text-muted me-1"></i> Within 30 Days
              </Link>
              <Link
                scroll={false}
                href="#!"
                className="badge rounded-pill bg-light text-default me-1"
              >
                <i className="bi bi-broadcast text-muted me-1"></i> Avg at
                English
              </Link>
            </div>
          </CardBody>
          <CardFooter>
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
                  <i className="bi bi-plus"></i> More
                </Link>
              </div>
              <div>
                <Link
                  scroll={false}
                  href="#!"
                  className="badge badge-md rounded-pill bg-primary-transparent"
                >
                  <i className="bi bi-briefcase me-1"></i>Exp : 5 Years
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RelatedProfiles;
