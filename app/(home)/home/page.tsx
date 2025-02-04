"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Dropdown,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
import Seo from "@/shared/layout-components/seo/seo";
const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize with -1 for no item expanded

  const toggleDropdown = (index: any) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked item
    }
  };
  return (
    <Fragment>
      <Seo title={"Home"} />
      {/* Start:: Landing Banner */}
      <div className="landing-banner ad-search-container">
        <section className="section">
          <div className="container main-banner-container">
            <div className="row justify-content-center">
              <Col xxl={9}>
                <div className="">
                  <div className="text-center">
                    <p className="landing-banner-heading mb-3 text-fixed-white">
                      {" "}
                      Welcome to QP-Hub
                    </p>
                    <p className="fs-15 mb-5 op-7 text-fixed-white">
                      Search from over 1,00,000 Profiles!
                    </p>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </section>
      </div>
      {/* End:: Landing Banner */}

      {/* Start:: Section-2 */}
      <section className="section bg-light">
        <div className="container text-center">
          <p className="fs-12 fw-semibold mb-1">
            <span className="landing-section-heading text-gradient">Steps</span>
          </p>
          <h3 className="fw-semibold mb-2">How it works ?</h3>
          <div className="row justify-content-center">
            <Col xl={6}>
              <p className="text-muted fs-15 mb-5 fw-normal">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </Col>
          </div>
          <div className="row text-start">
            <div className="col-12 col-md-4">
              <div className="card custom-card feature-style steps-card first">
                <Card.Body className="rounded">
                  <div className="mb-3 ms-1">
                    <span className="feature-style-icon bg-primary-transparent svg-primary">
                      <i className="ti ti-file-invoice"></i>
                    </span>
                  </div>
                  <h5 className="fw-semibold">Create An Account</h5>
                  <p className="op-8">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Register Now
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <Card className="custom-card feature-style steps-card second">
                <Card.Body className="rounded">
                  <div className="mb-3 ms-1">
                    <span className="feature-style-icon bg-primary-transparent svg-primary">
                      <i className="ti ti-user-plus"></i>
                    </span>
                  </div>
                  <h5 className="fw-semibold">Post An Advert</h5>
                  <p className="op-8">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Post Ad
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4">
              <Card className="custom-card feature-style steps-card third">
                <Card.Body className="rounded">
                  <div className="mb-3 ms-1">
                    <span className="feature-style-icon bg-primary-transparent svg-primary">
                      <i className="ti ti-briefcase"></i>
                    </span>
                  </div>
                  <h5 className="fw-semibold">Start Earning</h5>
                  <p className="op-8">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Start Now
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-2 */}

      {/* Start:: Search Modal */}
      <Modal
        className="fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="searchModal"
        aria-hidden="true"
      >
        <Modal.Body className="p-4">
          <span className="input-group">
            <input
              type="text"
              className="form-control form-control-lg border-0 shadow-none"
              placeholder="Search"
              aria-label="Username"
            />
            <Link
              scroll={false}
              href="#!"
              className="input-group-text border-0"
              id="voice-search"
            >
              <i className="fe fe-mic header-link-icon"></i>
            </Link>
          </span>
          <div className="mt-4">
            <p className="font-weight-semibold text-muted mb-2">
              Are You Looking For...
            </p>
            <Link scroll={false} href="#!" className="search-tags">
              Popular Articles
            </Link>
            <Link scroll={false} href="#!" className="search-tags">
              Recent Articles
            </Link>
            <Link scroll={false} href="#!" className="search-tags">
              News and Updates
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <div className="ms-auto">
            <Button variant="" className="btn btn-lg btn-primary">
              Search
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* End:: Search Modal */}
    </Fragment>
  );
};

export default Landing;
