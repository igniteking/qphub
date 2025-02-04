"use client";

import LabeledTwoThumbs1 from "@/shared/data/dashboards/searchjobsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {
  Card,
  Col,
  Collapse,
  Dropdown,
  Form,
  OverlayTrigger,
  Pagination,
  Row,
  Tooltip,
} from "react-bootstrap";
import { connect } from "react-redux";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Searchcandidate = ({ local_varaiable }: any) => {
  const Data = [
    { value: "All Categories", label: "All Categories" },
    { value: "Software Developer", label: "Software Developer" },
    { value: "Web Developer", label: "Web Developer" },
    { value: "Software Architect", label: "Software Architect" },
    { value: "IT Hardware", label: "IT Hardware" },
    { value: "Network Engineer", label: "Network Engineer" },
    { value: "React Developer", label: "React Developer" },
  ];
  const Data2 = [
    { value: "Fresher `s", label: "Fresher `s" },
    { value: "1 Year Exp", label: "1 Year Exp" },
    { value: "2 Year Exp", label: "2 Year Exp" },
    { value: "3 Year Exp", label: "3 Year Exp" },
    { value: "4 Year Exp", label: "4 Year Exp" },
    { value: "5+ Year Exp", label: "5+ Year Exp" },
  ];
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <Fragment>
      {/* Page Header */}
      <Seo title={"Search Candidate"} />
      <Pageheader
        Heading="Search Candidate"
        Pages={[
          { title: "Apps", active: true },
          { title: "Jobs", active: true },
          { title: "Search Candidate", active: false },
        ]}
      />
      {/* Page Header Close */}
      {/* Start::row-1 */}
      <Row>
        <Col xxl={3} xl={3}>
          <Card className="custom-card products-navigation-card">
            <Card.Body className="p-0">
              <div className="px-2 py-4 px-sm-4 border-bottom">
                <h6 className="fw-medium mb-0">Categories</h6>
                <div className="px-2 py-3 pb-0">
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="c-1"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="c-1">
                      R &amp; D
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      2,712
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="c-2"
                    />
                    <Form.Label className="form-check-label" htmlFor="c-2">
                      Accounting
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      536
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="c-3"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="c-3">
                      Business Process
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      18,289
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="c-4"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="c-4">
                      Consulting
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      3,453
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="c-5"
                    />
                    <Form.Label className="form-check-label" htmlFor="c-5">
                      Administrative Support
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      7,165
                    </span>
                  </div>
                  <Collapse in={open}>
                    <div>
                      <div className="form-check mb-2">
                        <Form.Check
                          className=""
                          type="checkbox"
                          value=""
                          id="c-6"
                        />
                        <Form.Label className="form-check-label" htmlFor="c-6">
                          Human Resources
                        </Form.Label>
                        <span className="badge bg-light text-default fw-500 float-end">
                          5,964
                        </span>
                      </div>
                      <div className="form-check mb-2">
                        <Form.Check
                          className=""
                          type="checkbox"
                          value=""
                          id="c-7"
                        />
                        <Form.Label className="form-check-label" htmlFor="c-7">
                          Marketing
                        </Form.Label>
                        <span className="badge bg-light text-default fw-500 float-end">
                          2,123
                        </span>
                      </div>
                    </div>
                  </Collapse>
                  <Link
                    scroll={false}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className="ecommerce-more-link"
                    data-bs-toggle="collapse"
                    href="#category-more"
                    role="button"
                  >
                    MORE
                  </Link>
                </div>
              </div>
              <div className="px-2 py-4 px-sm-4 border-bottom">
                <h6 className="fw-medium mb-0">Availability</h6>
                <div className="px-2 py-3 pb-0">
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="available-1"
                      
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="available-1"
                    >
                      Immediate
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      512
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="available-2"
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="available-2"
                    >
                      30 Days
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      2,186
                    </span>
                  </div>
                  <div className="form-check">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="available-3"
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="available-3"
                    >
                      3 Months
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      734
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 py-4 px-sm-4 border-bottom">
                <h6 className="fw-medium mb-0">Bond Agreement</h6>
                <div className="px-2 py-3 pb-0">
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="bond-1"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="bond-1">
                      1 Year
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      512
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="bond-2"
                    />
                    <Form.Label className="form-check-label" htmlFor="bond-2">
                      2 Years
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      512
                    </span>
                  </div>
                  <div className="form-check">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="bond-3"
                    />
                    <Form.Label className="form-check-label" htmlFor="bond-3">
                      3 Years
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      512
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 py-4 px-sm-4 border-bottom">
                <h6 className="fw-medium mb-0">Languages</h6>
                <div className="px-2 py-3 pb-0">
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="languages-1"
                      
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="languages-1"
                    >
                      English
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      13
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="languages-2"
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="languages-2"
                    >
                      Hindi
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      67
                    </span>
                  </div>
                  <div className="form-check">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="languages-3"
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="languages-3"
                    >
                      Telugu
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      58
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 py-4 px-sm-4 border-bottom">
                <h6 className="fw-medium mb-0">Job Type</h6>
                <div className="px-2 py-3 pb-0">
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="j-1"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="j-1">
                      Full Time
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      512
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="j-2"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="j-2">
                      Part Time
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      2,186
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="j-3"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="j-3">
                      Internship
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      734
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="j-4"
                    />
                    <Form.Label className="form-check-label" htmlFor="j-4">
                      Freelancer
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      16
                    </span>
                  </div>
                  <div className="form-check">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="j-5"
                    />
                    <Form.Label className="form-check-label" htmlFor="j-5">
                      Remote Job
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      1,432
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 py-4 px-sm-4 border-bottom">
                <h6 className="fw-medium mb-2">Salary Range</h6>
                <div className="px-2 py-3 pb-0">
                  <LabeledTwoThumbs1 rtl={local_varaiable.dir == "rtl"} />
                </div>
              </div>
              <div className="px-2 py-4 px-sm-4 border-bottom">
                <h6 className="fw-medium mb-0">Qualification</h6>
                <div className="px-2 py-3 pb-0">
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="q-1"
                    />
                    <Form.Label className="form-check-label" htmlFor="q-1">
                      All Education Levels
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      16,563
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="q-2"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="q-2">
                      10th Pass and Above
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      15,234
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="q-3"
                    />
                    <Form.Label className="form-check-label" htmlFor="q-3">
                      12th Pass and Above
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      6,278
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="q-4"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="q-4">
                      Diploma and Graduate
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      4,531
                    </span>
                  </div>
                  <div className="form-check">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="q-5"
                    />
                    <Form.Label className="form-check-label" htmlFor="q-5">
                      Post Graduate
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      2,405
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 py-4 px-sm-4">
                <h6 className="fw-medium mb-0">Skills</h6>
                <div className="px-2 py-3 pb-0">
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="s-1"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="s-1">
                      HTML5
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      23,156
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="s-2"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="s-2">
                      Javascript
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      15,632
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="s-3"
                    />
                    <Form.Label className="form-check-label" htmlFor="s-3">
                      PHP
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      15,032
                    </span>
                  </div>
                  <div className="form-check mb-2">
                    <Form.Check
                      className=""
                      type="checkbox"
                      value=""
                      id="s-4"
                      
                    />
                    <Form.Label className="form-check-label" htmlFor="s-4">
                      CSS3
                    </Form.Label>
                    <span className="badge bg-light text-default fw-500 float-end">
                      7,154
                    </span>
                  </div>
                  <Collapse in={open1}>
                    <div className="collapse" id="sizes-more">
                      <div className="form-check mb-2">
                        <Form.Check
                          className=""
                          type="checkbox"
                          value=""
                          id="s-5"
                        />
                        <Form.Label className="form-check-label" htmlFor="s-5">
                          Bootstrap
                        </Form.Label>
                        <span className="badge bg-light text-default fw-500 float-end">
                          5,946
                        </span>
                      </div>
                      <div className="form-check mb-2">
                        <Form.Check
                          className=""
                          type="checkbox"
                          value=""
                          id="s-6"
                        />
                        <Form.Label className="form-check-label" htmlFor="s-6">
                          Angular
                        </Form.Label>
                        <span className="badge bg-light text-default fw-500 float-end">
                          3,267
                        </span>
                      </div>
                      <div className="form-check mb-2">
                        <Form.Check
                          className=""
                          type="checkbox"
                          value=""
                          id="s-7"
                        />
                        <Form.Label className="form-check-label" htmlFor="s-7">
                          React
                        </Form.Label>
                        <span className="badge bg-light text-default fw-500 float-end">
                          578
                        </span>
                      </div>
                    </div>
                  </Collapse>
                  <Link
                    scroll={false}
                    onClick={() => setOpen1(!open1)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
                    className="ecommerce-more-link"
                    data-bs-toggle="collapse"
                    href="#sizes-more"
                    role="button"
                  >
                    MORE
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={9} xl={9}>
          <div className="row align-items-center">
            <Col lg={12}>
              <Card className="custom-card border-0 shadow-none">
                <Card.Body className="p-md-0">
                  <div className="input-group companies-search-input">
                    <input
                      type="text"
                      className="form-control form-control-lg w-25"
                      aria-label="Text input with segmented dropdown button"
                      placeholder="Enter your keyword here"
                    />
                    <Select
                      name="state"
                      options={Data}
                      className="basic-multi-select "
                      isSearchable
                      menuPlacement="auto"
                      classNamePrefix="Select2"
                      defaultValue={[Data[0]]}
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg w-25"
                      aria-label="Text input with segmented dropdown button"
                      placeholder="Search by location"
                    />

                    <Select
                      name="state"
                      options={Data2}
                      className="basic-multi-select"
                      isSearchable
                      menuPlacement="auto"
                      classNamePrefix="Select2"
                      defaultValue={[Data2[0]]}
                    />
                    <button type="button" className="btn btn-lg btn-primary">
                      <i className="ri-search-line"></i>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <h5 className="fw-medium mb-0 flex-grow-1">
                      1287{" "}
                      <span className="fw-normal fs-18">
                        Candidates match your job search
                      </span>{" "}
                    </h5>
                    <div className="btn-group">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          className="btn btn-outline-light border dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Sort By
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <li>
                            <Dropdown.Item href="#!">Premium</Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item href="#!">Newest</Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item href="#!">
                              Most Relevant
                            </Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item href="#!">Fresher</Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item href="#!">Experienced</Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item href="#!">
                              Bond Agreement
                            </Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item href="#!">
                              Flexible Shift
                            </Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item href="#!">Day Shift</Dropdown.Item>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
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
                          <i className="bi bi-geo-alt fs-11"></i> Kondapur,
                          Hyderabad
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
                        <i className="bi bi-mortarboard text-muted me-1"></i>{" "}
                        Graduate
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
                        <i className="bi bi-clock text-muted me-1"></i>{" "}
                        Immediate Joinee
                      </span>
                    </Link>
                    <Link
                      scroll={false}
                      href="#!"
                      className="badge rounded-pill bg-light text-default me-1"
                    >
                      <span className="fs-14">
                        <i className="bi bi-broadcast text-muted me-1"></i> Good
                        at English
                      </span>
                    </Link>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-3 mb-4 text-muted">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam
                    rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus
                    labore no sed ipsum ipsum nonumy vero sanctus labore.A
                    officiis optio temporibus minima facilis.
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
                        <span className="fw-medium">
                          {" "}
                          English, Hindi, Telugu
                        </span>
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
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
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
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
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
                        <img src="../../../assets/images/faces/3.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          {" "}
                          Isabella
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          Web Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                          Hyderabad
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
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-warning">
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
                  </div>
                  <div className="popular-tags mb-4">
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
                      <i className="bi bi-clock text-muted me-1"></i> Within 10
                      Days
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
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
                          $3,600
                        </span>
                      </OverlayTrigger>
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
                          $4,700
                        </span>
                      </OverlayTrigger>
                    </p>
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Telugu</span>
                    </p>
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
                        React Native
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-primary-transparent"
                      >
                        More
                      </Link>
                    </div>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>2 year bond accepted</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="badge badge-md rounded-pill bg-info-transparent me-1"
                          data-bs-toggle="tooltip"
                          title="2 year bond accepted"
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
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Download Resume</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Download Resume"
                      >
                        <span>
                          <i className="bi bi-download"></i>
                        </span>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="avatar avatar-rounded avatar-sm bg-light text-default border"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
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
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
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
                        <img src="../../../assets/images/faces/21.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          {" "}
                          Abigail
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          Python Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                          Chennai
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
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-warning">
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
                  </div>
                  <div className="popular-tags mb-4">
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
                      <i className="bi bi-moon-stars text-muted me-1"></i>{" "}
                      Day-shift
                    </Link>
                    <Link
                      scroll={false}
                      href="#!"
                      className="badge rounded-pill bg-light text-default me-1"
                    >
                      <i className="bi bi-clock text-muted me-1"></i> Within 30
                      Days
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
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
                          $4,300
                        </span>
                      </OverlayTrigger>
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
                          $5,000
                        </span>
                      </OverlayTrigger>
                    </p>
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Hindi</span>
                    </p>
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
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
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
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
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
                        <img src="../../../assets/images/faces/5.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          {" "}
                          Abigail
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          Java Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                          Banglore
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
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-warning">
                            <i className="bi bi-star"></i>
                          </span>
                        </div>
                        <Link
                          scroll={false}
                          href="#!"
                          className="mb-0 ms-1 min-w-fit-content text-muted"
                        >
                          <span>(13)</span>
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
                      <i className="bi bi-mortarboard text-muted me-1"></i> MBA
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
                      <i className="bi bi-clock text-muted me-1"></i> Within 30
                      Days
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
                    <p className="mb-0 flex-grow-1">
                      <span className="text-muted">Package (Yearly) :</span>
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
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Hindi, Telugu</span>
                    </p>
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
                        Java
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        Core Java
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-primary-transparent"
                      >
                        More
                      </Link>
                    </div>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>2 year bond accepted</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="badge badge-md rounded-pill bg-info-transparent me-1"
                          data-bs-toggle="tooltip"
                          title="2 year bond accepted"
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
                        <i className="bi bi-briefcase me-1"></i>Fresher
                      </Link>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
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
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
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
                        <img src="../../../assets/images/faces/13.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          {" "}
                          Jack Miller
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          Angular Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                          Nellore
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
                            <i className="bi bi-star"></i>
                          </span>
                        </div>
                        <Link
                          scroll={false}
                          href="#!"
                          className="mb-0 ms-1 min-w-fit-content text-muted"
                        >
                          <span>(18)</span>
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
                      <i className="bi bi-mortarboard text-muted me-1"></i> MCA
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
                      <i className="bi bi-clock text-muted me-1"></i> Within 15
                      Days
                    </Link>
                    <Link
                      scroll={false}
                      href="#!"
                      className="badge rounded-pill bg-light text-default me-1"
                    >
                      <i className="bi bi-broadcast text-muted me-1"></i> Fluent
                      at English
                    </Link>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-3">
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
                          $3,600
                        </span>
                      </OverlayTrigger>
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
                          $4,700
                        </span>
                      </OverlayTrigger>
                    </p>
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Telugu</span>
                    </p>
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
                        Angular
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        Advanced Java
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-primary-transparent"
                      >
                        More
                      </Link>
                    </div>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>2 year bond accepted</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="badge badge-md rounded-pill bg-info-transparent me-1"
                          data-bs-toggle="tooltip"
                          title="2 year bond accepted"
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
                        <i className="bi bi-briefcase me-1"></i>Exp : 5 Years
                      </Link>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Download Resume</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Download Resume"
                      >
                        <span>
                          <i className="bi bi-download"></i>
                        </span>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="avatar avatar-rounded avatar-sm bg-light text-default border"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
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
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
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
                        <img src="../../../assets/images/faces/21.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          {" "}
                          Christopher
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          AWS Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Kukatpally,
                          Hyderabad
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
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-warning">
                            <i className="bi bi-star"></i>
                          </span>
                        </div>
                        <Link
                          scroll={false}
                          href="#!"
                          className="mb-0 ms-1 min-w-fit-content text-muted"
                        >
                          <span>(13)</span>
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
                      <i className="bi bi-mortarboard text-muted me-1"></i> MBA
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
                      <i className="bi bi-clock text-muted me-1"></i> Within 30
                      Days
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
                    <p className="mb-0 flex-grow-1">
                      <span className="text-muted">Package (Yearly) :</span>
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
                          $8,900
                        </span>
                      </OverlayTrigger>
                    </p>
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Hindi, Telugu</span>
                    </p>
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
                        AWS Lambda
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        Athena
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        Linux
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-primary-transparent"
                      >
                        More
                      </Link>
                    </div>
                    <div>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge badge-md rounded-pill bg-primary-transparent"
                      >
                        <i className="bi bi-briefcase me-1"></i>Fresher
                      </Link>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
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
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
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
                          Scarlett
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
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
                          <i className="bi bi-geo-alt fs-11"></i> Kondapur,
                          Hyderabad
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
                      <i className="bi bi-clock text-muted me-1"></i> Immediate
                      Joinee
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
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
                      </OverlayTrigger>
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
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Hindi, Telugu</span>
                    </p>
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
                        className="badge rounded-pill bg-primary-transparent"
                      >
                        More
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
                          className="badge badge-md rounded-pill bg-info-transparent me-1"
                          data-bs-toggle="tooltip"
                          title="1 year bond accepted"
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
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
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
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
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
                        <img src="../../../assets/images/faces/3.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          {" "}
                          Victoria
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>View Profile</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          Web Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                          Hyderabad
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
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-warning">
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
                  </div>
                  <div className="popular-tags mb-4">
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
                      <i className="bi bi-clock text-muted me-1"></i> Within 10
                      Days
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
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
                          $3,600
                        </span>
                      </OverlayTrigger>
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
                          $4,700
                        </span>
                      </OverlayTrigger>
                    </p>
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Telugu</span>
                    </p>
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
                        React Native
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-primary-transparent"
                      >
                        More
                      </Link>
                    </div>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>2 year bond accepted</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="badge badge-md rounded-pill bg-info-transparent me-1"
                          data-bs-toggle="tooltip"
                          title="2 year bond accepted"
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
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
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
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
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
                        <img src="../../../assets/images/faces/21.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          {" "}
                          Olivia
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          Python Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                          Chennai
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
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-warning">
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
                  </div>
                  <div className="popular-tags mb-4">
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
                      <i className="bi bi-moon-stars text-muted me-1"></i>{" "}
                      Day-shift
                    </Link>
                    <Link
                      scroll={false}
                      href="#!"
                      className="badge rounded-pill bg-light text-default me-1"
                    >
                      <i className="bi bi-clock text-muted me-1"></i> Within 30
                      Days
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
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
                          $4,300
                        </span>
                      </OverlayTrigger>
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
                          $5,000
                        </span>
                      </OverlayTrigger>
                    </p>
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Hindi</span>
                    </p>
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
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="btn-list float-end">
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
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
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
                        <img src="../../../assets/images/faces/5.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-medium mb-0 d-flex align-items-center">
                        <Link scroll={false} href="/candidate-details/">
                          Emily
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Verified candidate</Tooltip>}
                          >
                            <i
                              className="bi bi-check-circle-fill text-success fs-16 ms-1"
                              data-bs-toggle="tooltip"
                              title="Verified candidate"
                            ></i>
                          </OverlayTrigger>
                        </Link>
                      </h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!">
                          Java Developer
                        </Link>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="bi bi-geo-alt fs-11"></i> Gachibowli,
                          Banglore
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
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-warning">
                            <i className="bi bi-star"></i>
                          </span>
                        </div>
                        <Link
                          scroll={false}
                          href="#!"
                          className="mb-0 ms-1 min-w-fit-content text-muted"
                        >
                          <span>(13)</span>
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
                      <i className="bi bi-mortarboard text-muted me-1"></i> MBA
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
                      <i className="bi bi-clock text-muted me-1"></i> Within 30
                      Days
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
                  <div className="d-flex align-items-center flex-wrap gap-3">
                    <p className="mb-0 flex-grow-1">
                      <span className="text-muted">Package (Yearly) :</span>
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
                    <p className="mb-0">
                      <span className="text-muted"> Languages :</span>{" "}
                      <span className="fw-medium"> English, Hindi, Telugu</span>
                    </p>
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
                        Java
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-light text-default me-1"
                      >
                        Core Java
                      </Link>
                      <Link
                        scroll={false}
                        href="#!"
                        className="badge rounded-pill bg-primary-transparent"
                      >
                        More
                      </Link>
                    </div>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>2 year bond accepted</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="badge badge-md rounded-pill bg-info-transparent me-1"
                          data-bs-toggle="tooltip"
                          title="2 year bond accepted"
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
                        <i className="bi bi-briefcase me-1"></i>Fresher
                      </Link>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </div>
          <Pagination className="mb-4 justify-content-end">
            <Pagination.Item disabled>Prev</Pagination.Item>
            <Pagination.Item active href="#!">
              1
            </Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item className="pagination-next">next</Pagination.Item>
          </Pagination>
        </Col>
      </Row>
      {/*End::row-1 */}
    </Fragment>
  );
};
const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps)(Searchcandidate);
