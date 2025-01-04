"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Candidatedetails = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <Seo title={"Candidate Details"} />
      <Pageheader
        Heading="Candidate Details"
        Pages={[
          { title: "Apps", active: true },
          { title: "Jobs", active: true },
          { title: "Candidate Details", active: false },
        ]}
      />
      {/* Page Header Close */}

      {/* Start::row-2 */}
      <Row>
        <Col lg={8}>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                <div className="d-flex flex-wrap gap-2">
                  <div>
                    <span className="avatar avatar-xxl avatar-rounded">
                      <img
                        src="../../../assets/images/faces/1.jpg"
                        className="rounded-circle img-fluid"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="ms-3">
                    <h4 className="fw-medium mb-0 d-flex align-items-center">
                      <a href="#!">
                        {" "}
                        Charlotte
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Verified candidate</Tooltip>}
                        >
                          <i className="bi bi-check-circle-fill text-success fs-16 ms-1"></i>
                        </OverlayTrigger>
                      </a>
                    </h4>
                    <Link scroll={false} href="#!" className="fw-medium">
                      <i className="bi bi-briefcase me-1"></i> Software
                      Developer
                    </Link>
                    <div className="d-flex flex-wrap gap-2 align-items-center fs-11 text-muted">
                      <p className="fs-11 mb-0">Ratings : </p>
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
                    <div className="d-flex fs-14 mt-3">
                      <div>
                        <p className="mb-1">
                          <i className="bi bi-geo-alt me-2"></i>Banglore,
                          Karnataka
                        </p>
                        <p>
                          <i className="bi bi-briefcase me-2"></i>1 Year
                          Experience
                        </p>
                      </div>
                      <div className="ms-4">
                        <p className="mb-1">
                          <i className="bi bi-coin me-2"></i>Package (Yearly) :
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Current Salary</Tooltip>}
                          >
                            <span className="fw-medium ms-1 d-inline-flex">
                              $10,000
                            </span>
                          </OverlayTrigger>
                          -
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Expected Salary</Tooltip>}
                          >
                            <span className="fw-medium">$20,000</span>
                          </OverlayTrigger>
                        </p>
                        <p>
                          <i className="bi bi-mortarboard me-2"></i>Graduate
                        </p>
                      </div>
                    </div>
                    <div className="popular-tags">
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-info-transparent me-1"
                      >
                        <i className="bi bi-moon-stars me-1"></i>Full Time
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-danger-transparent"
                      >
                        <i className="bi bi-clock me-1"></i> Immediate Joinee
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="btn-list">
                  <Link scroll={false} href="#!" className="btn btn-primary">
                    <i className="bi bi-download me-1"></i> Download CV
                  </Link>
                  <Link
                    scroll={false}
                    href="#!"
                    className="btn btn-icon btn-primary-light btn-wave"
                  >
                    <i className="ri-heart-line fs-13"></i>
                  </Link>
                  <Link
                    scroll={false}
                    href="#!"
                    className="btn btn-icon btn-primary-light btn-wave"
                  >
                    <i className="ri-share-line"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Candidate Profile Information</Card.Title>
            </Card.Header>
            <Card.Body className="p-0 candidate-edu-timeline">
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-briefcase fs-13"></i>
                  </span>{" "}
                  Career Objective :
                </h5>
                <div className="ms-4 ps-3">
                  <p className="op-9">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam
                    rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus
                    labore no sed ipsum ipsum nonumy vero sanctus labore.A
                    officiis optio temporibus minima facilis...
                  </p>
                  <p className="mb-0 op-9">
                    Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam
                    rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus
                    labore no sed ipsum ipsum nonumy vero sanctus labore..
                  </p>
                </div>
              </div>
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-mortarboard fs-13"></i>
                  </span>{" "}
                  Education :
                </h5>
                <div className="ms-4 ps-3">
                  <p className="fw-medium fs-14 mb-0">
                    Bachelors of science in computer science
                  </p>
                  <div className="d-flex gap-2">
                    <p className="mb-0">Dwayne University</p>
                    <p className="mb-0 text-muted">
                      <i className="bi bi-geo-alt fs-12"></i> Nellore
                    </p>
                  </div>
                  <p className="mb-4"> (2019 Mar - 2024 Apr)</p>
                  <p className="fw-medium fs-14 mb-0">Intermediate (MPC)</p>
                  <div className="d-flex gap-2">
                    <p className="mb-0">Sprect College</p>
                    <p className="mb-0 text-muted">
                      <i className="bi bi-geo-alt fs-12"></i> Warangal
                    </p>
                  </div>
                  <p className="mb-0"> (2017 Mar - 2019 Apr)</p>
                </div>
              </div>
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-award fs-13"></i>
                  </span>{" "}
                  Certifications :
                </h5>
                <div className="ms-4 ps-3">
                  <p className="fw-medium fs-14 mb-0">
                    Web Development (3 Months)
                  </p>
                  <p className="mb-4">EMC Solutions Pvt Ltd</p>
                  <p className="fw-medium fs-14 mb-0">
                    Python Development (6 Months)
                  </p>
                  <p className="mb-0">Dabre Services Pvt Ltd</p>
                </div>
              </div>
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-journal-medical fs-13"></i>
                  </span>{" "}
                  Publications :
                </h5>
                <div className="ms-3">
                  <ol className="list-group border-0 list-bullets">
                    <li className="border-0 py-1">
                      <span className="fw-medium">“One of a Kind Design,”</span>{" "}
                      Web Design Book, Poulin Publishing, 2018
                    </li>
                    <li className="border-0 py-1">
                      <span className="fw-medium">
                        “Website Design in 2019,”
                      </span>{" "}
                      A List Apart, June 2019
                    </li>
                    <li className="border-0 py-1">
                      <span className="fw-medium">
                        “Usable Information Architecture,”
                      </span>{" "}
                      SitePoint, Feb 2019
                    </li>
                  </ol>
                </div>
              </div>
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-activity fs-13"></i>
                  </span>{" "}
                  Activities and Interests :
                </h5>
                <div className="ms-3">
                  <ol className="list-group border-0 list-bullets">
                    <li className="border-0 py-1">Community Involvement</li>
                    <li className="border-0 py-1">Yoga</li>
                    <li className="border-0 py-1">Travel</li>
                    <li className="border-0 py-1">Art</li>
                  </ol>
                </div>
              </div>
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-link-45deg fs-13"></i>
                  </span>{" "}
                  References :
                </h5>
                <div className="ms-4 ps-3">
                  <p>
                    <span className="fw-medium">Name : </span> Nicole Chiu
                  </p>
                  <p>
                    <span className="fw-medium">Designation : </span> Software
                    Developer
                  </p>
                  <p>
                    <span className="fw-medium">Company Name : </span> Spotech
                    Technical Solutions
                  </p>
                  <p>
                    <span className="fw-medium">Mobile : </span> +91 7865443679
                  </p>
                  <p>
                    <span className="fw-medium">Email : </span> nchiu@email.com
                  </p>
                  <p className="mb-0">
                    <span className="fw-medium">Location : </span> Hyderabad
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Experience Overview</Card.Title>
            </Card.Header>
            <Card.Body className="p-0 candidate-edu-timeline">
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-briefcase fs-13"></i>
                  </span>{" "}
                  Experience :
                </h5>
                <div className="ms-4 ps-3">
                  <p className="fw-medium fs-14 mb-0">
                    Full Stack Developer (2019 Mar - 2024 Apr)
                  </p>
                  <div className="d-flex gap-2">
                    <p>Spotech Technical Solutions</p>
                    <p className="mb-0 fs-12 text-muted">
                      <i className="bi bi-geo-alt fs-11"></i> Kondapur,
                      Hyderabad
                    </p>
                  </div>
                  <p className="fw-medium mb-2">Responsibilities :</p>
                  <ol className="list-group border-0 list-bullets">
                    <li className="border-0 py-1">
                      Design thoughtful, beautiful, and useful software user
                      interfaces and experiences in a team environment..
                    </li>
                    <li className="border-0 py-1">
                      Create user-centered designs by considering market
                      analysis, customer feedback, and usability findings.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="p-4 border-bottom">
                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                  <span className="avatar avatar-rounded bg-primary avatar-sm">
                    <i className="bi bi-people fs-13"></i>
                  </span>{" "}
                  Volunteer Experience :
                </h5>
                <div className="ms-4 ps-3">
                  <p className="fw-medium fs-14 mb-0">
                    Volunteer in the Student Organization
                  </p>
                  <p className="mb-2 text-muted">
                    <i className="bi bi-geo-alt fs-12"></i> Warangal, 2015
                  </p>
                  <ol className="list-group border-0 list-bullets">
                    <li className="border-0 py-1">
                      In charge of Organizing activities for approximately 100+
                      internation schools in 2015
                    </li>
                    <li className="border-0 py-1">
                      In charge of Organizing activities for approximately 100+
                      internation schools in 2015
                    </li>
                  </ol>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card border bg-primary-transparent shadow-none">
            <Card.Body>
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
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Skills</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="popular-tags">
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
                  className="badge rounded-pill bg-light text-default me-1"
                >
                  React
                </Link>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header>
              <Card.Title>Tools Used</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex flex-wrap gap-2">
              <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                <img src="../../../assets/images/company-logos/1.png" alt="" />
              </span>
              <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                <img src="../../../assets/images/company-logos/2.png" alt="" />
              </span>
              <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                <img src="../../../assets/images/company-logos/3.png" alt="" />
              </span>
              <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                <img src="../../../assets/images/company-logos/4.png" alt="" />
              </span>
              <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                <img src="../../../assets/images/company-logos/5.png" alt="" />
              </span>
              <span className="avatar avatar-rounded bg-white shadow-sm border p-2">
                <img src="../../../assets/images/company-logos/6.png" alt="" />
              </span>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Languages</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                <span className="fw-medium">English : </span>Fluent
              </p>
              <p>
                <span className="fw-medium">Hindi : </span>Intermediate
              </p>
              <p className="mb-0">
                <span className="fw-medium">Telugu : </span>Expert
              </p>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header>
              <Card.Title>Personal Information</Card.Title>
            </Card.Header>
            <Card.Body className="p-2">
              <div className="table-responsive">
                <table className="table table-responsive table-borderless">
                  <tbody>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Full Name</span>
                      </td>
                      <td>: Brenda Simpson</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Email</span>
                      </td>
                      <td>: brendra@gmail.com</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">D.O.B</span>
                      </td>
                      <td>: 13 Jan 2024</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Gender</span>
                      </td>
                      <td>: Female</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Age</span>
                      </td>
                      <td>: 35</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Mobile </span>
                      </td>
                      <td>: +91 7865343874</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Mother Tongue </span>
                      </td>
                      <td>: Telugu</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Marital Status </span>
                      </td>
                      <td>: Unmarried</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Blood Group </span>
                      </td>
                      <td>: o +ve</td>
                    </tr>
                    <tr>
                      <td className="w-50">
                        <span className="fw-medium">Address </span>
                      </td>
                      <td>
                        {" "}
                        Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                        Bangalore-560016
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center">
                <p className="fs-15 mb-0 me-4 fw-medium">Social :</p>
                <div className="btn-list mb-0">
                  <Button
                    variant=""
                    className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-xxl-0"
                  >
                    <i className="ri-facebook-line"></i>
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-xxl-0"
                  >
                    <i className="ri-twitter-x-line"></i>
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-xxl-0"
                  >
                    <i className="ri-instagram-line"></i>
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-xxl-0"
                  >
                    <i className="ri-github-line"></i>
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-xxl-0"
                  >
                    <i className="ri-youtube-line"></i>
                  </Button>
                </div>
              </div>
            </Card.Footer>
          </Card>
          <Card className="custom-card">
            <Card.Body>
              <div className="">
                <h5 className="fw-medium mb-3">Get Latest Alerts</h5>
                <p>
                  Latest candidate updates on the go to recieved direct to your
                  email. Stay updated with your latest new candidates list.
                </p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Here"
                    aria-label="blog-email"
                    aria-describedby="blog-subscribe"
                  />
                  <Button
                    variant=""
                    className="btn btn-primary"
                    type="button"
                    id="blog-subscribe"
                  >
                    Subscribe
                  </Button>
                </div>
                <label className="form-check-label">
                  By Subscribing you accept to{" "}
                  <Link scroll={false} href="#!" className="text-success">
                    <u>privacy policy</u>
                  </Link>
                </label>
              </div>
            </Card.Body>
          </Card>
          <div>
            <h4 className="fw-medium mb-0">Related Profiles</h4>
            <p className="">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Swiper
              className="swiper-related-jobs"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              <SwiperSlide>
                <Card className="custom-card">
                  <Card.Body>
                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                      <div>
                        <span className="avatar avatar-lg avatar-rounded">
                          <img
                            src="../../../assets/images/faces/1.jpg"
                            alt=""
                          />
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
                            <i className="bi bi-geo-alt fs-11"></i> Kondapur,
                            Hyderabad
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
                        <i className="bi bi-mortarboard text-muted me-1"></i>{" "}
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
                        <i className="bi bi-clock text-muted me-1"></i>{" "}
                        Immediate Joinee
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        <i className="bi bi-broadcast text-muted me-1"></i> Good
                        at English
                      </Link>
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
                            <i className="bi bi-hand-thumbs-up me-1"></i>1 year
                            bond accepted
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
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="custom-card">
                  <Card.Body>
                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                      <div>
                        <span className="avatar avatar-lg avatar-rounded">
                          <img
                            src="../../../assets/images/faces/3.jpg"
                            alt=""
                          />
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
                        <i className="bi bi-mortarboard text-muted me-1"></i>{" "}
                        Post Graduate
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
                        <i className="bi bi-clock text-muted me-1"></i> Within
                        10 Days
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        <i className="bi bi-broadcast text-muted me-1"></i> Good
                        at English
                      </Link>
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
                            <i className="bi bi-hand-thumbs-up me-1"></i>2 years
                            bond accepted
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
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="custom-card">
                  <Card.Body>
                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                      <div>
                        <span className="avatar avatar-lg avatar-rounded">
                          <img
                            src="../../../assets/images/faces/21.jpg"
                            alt=""
                          />
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
                            <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                            Chennai
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
                        <i className="bi bi-mortarboard text-muted me-1"></i>{" "}
                        MBA
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        <i className="bi bi-moon-stars text-muted me-1"></i>{" "}
                        Day-shift
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        <i className="bi bi-clock text-muted me-1"></i> Within
                        30 Days
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        <i className="bi bi-broadcast text-muted me-1"></i> Avg
                        at English
                      </Link>
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
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </Col>
      </Row>
      {/* End::row-2 */}
    </Fragment>
  );
};

export default Candidatedetails;
