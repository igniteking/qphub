"use client";
import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  ListGroup,
  ProgressBar,
  Row,
} from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import * as Jobsdata from "@/shared/data/dashboards/jobsdata";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Jobs = () => {
  return (
    <Fragment>
      {/*  Start::page-header */}
      <Seo title={"Dashboard"} />
      <Pageheader
        Heading="Jobs"
        Pages={[
          { title: "Dashboards", active: true },
          { title: "Jobs", active: false },
        ]}
      />
      {/*  End::page-header */}

      {/*  Start:: row-1 */}
      <Row>
        <Col xxl={3} xl={3} lg={3} md={3} sm={6} className="col-12">
          <Card className="custom-card">
            <Card.Body className="p-2">
              <div className="d-flex align-items-center justify-content-between bg-primary-transparent p-3 rounded flex-wrap gap-3">
                <div className="flex-fill">
                  <span className="d-block mb-2 text-default">Total Jobs</span>
                  <div className="d-flex align-items-end">
                    <h4 className="fw-medium mb-0 lh-1">4,676</h4>
                    <span className="d-block text-success ms-2 fw-medium">
                      0.67%<i className="ti ti-arrow-narrow-up"></i>
                    </span>
                  </div>
                </div>
                <div className="main-card-icon primary">
                  <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                    <div className="avatar avatar-sm svg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none" />
                        <path
                          d="M128,144a191.14,191.14,0,0,1-96-25.68h0V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V118.31A191.08,191.08,0,0,1,128,144Z"
                          opacity="0.2"
                        />
                        <line
                          x1="112"
                          y1="112"
                          x2="144"
                          y2="112"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <rect
                          x="32"
                          y="64"
                          width="192"
                          height="144"
                          rx="8"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <path
                          d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <path
                          d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={6} className="col-12">
          <Card className="custom-card">
            <Card.Body className="p-2">
              <div className="d-flex align-items-center justify-content-between bg-secondary-transparent p-3 rounded flex-wrap gap-3">
                <div className="flex-fill">
                  <span className="d-block mb-2 text-default">
                    Total Applications
                  </span>
                  <div className="d-flex align-items-end">
                    <h4 className="fw-medium mb-0 lh-1">1.23K</h4>
                    <span className="d-block text-success ms-2 fw-medium">
                      1.95%<i className="ti ti-arrow-narrow-up"></i>
                    </span>
                  </div>
                </div>
                <div className="main-card-icon secondary">
                  <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                    <div className="avatar avatar-sm svg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none" />
                        <rect
                          x="53.87"
                          y="34.21"
                          width="148.27"
                          height="187.59"
                          rx="8"
                          transform="translate(24.22 -20.31) rotate(10.02)"
                          opacity="0.2"
                        />
                        <rect
                          x="53.87"
                          y="34.21"
                          width="148.27"
                          height="187.59"
                          rx="8"
                          transform="translate(24.22 -20.31) rotate(10.02)"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="97.22"
                          y1="59.81"
                          x2="180.2"
                          y2="74.47"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="174.66"
                          y1="105.98"
                          x2="91.67"
                          y2="91.33"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="127.62"
                          y1="130.17"
                          x2="86.13"
                          y2="122.84"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={6} className="col-12">
          <Card className="custom-card">
            <Card.Body className="p-2">
              <div className="d-flex align-items-center justify-content-between bg-success-transparent p-3 rounded flex-wrap gap-3">
                <div className="flex-fill">
                  <span className="d-block mb-2 text-default">
                    Total Recruiters
                  </span>
                  <div className="d-flex align-items-end">
                    <h4 className="fw-medium mb-0 lh-1">1,342</h4>
                    <span className="d-block text-danger ms-2 fw-medium">
                      4.45%<i className="ti ti-arrow-narrow-down"></i>
                    </span>
                  </div>
                </div>
                <div className="main-card-icon success">
                  <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                    <div className="avatar avatar-sm svg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none" />
                        <path
                          d="M205.31,71.08a16,16,0,0,1-20.39-20.39A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,205.31,71.08Z"
                          opacity="0.2"
                        />
                        <line
                          x1="200"
                          y1="40"
                          x2="200"
                          y2="28"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <circle
                          cx="200"
                          cy="56"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="186.14"
                          y1="48"
                          x2="175.75"
                          y2="42"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="186.14"
                          y1="64"
                          x2="175.75"
                          y2="70"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="200"
                          y1="72"
                          x2="200"
                          y2="84"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="213.86"
                          y1="64"
                          x2="224.25"
                          y2="70"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <line
                          x1="213.86"
                          y1="48"
                          x2="224.25"
                          y2="42"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <circle
                          cx="128"
                          cy="120"
                          r="40"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <path
                          d="M63.8,199.37a72,72,0,0,1,128.4,0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <path
                          d="M222.67,112A95.92,95.92,0,1,1,144,33.33"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={6} className="col-12">
          <Card className="custom-card">
            <Card.Body className="p-2">
              <div className="d-flex align-items-center justify-content-between bg-orange-transparent p-3 rounded flex-wrap gap-3">
                <div className="flex-fill">
                  <span className="d-block mb-2 text-default">
                    Recruitments
                  </span>
                  <div className="d-flex align-items-end">
                    <h4 className="fw-medium mb-0 lh-1">2,546</h4>
                    <span className="d-block text-success ms-2">
                      1.56%<i className="ti ti-arrow-narrow-up"></i>
                    </span>
                  </div>
                </div>
                <div className="main-card-icon orange">
                  <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                    <div className="avatar avatar-sm svg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none" />
                        <path
                          d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
                          opacity="0.2"
                        />
                        <path
                          d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <polyline
                          points="88 136 112 160 168 104"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*  End:: row-1 */}

      {/*  Start:: row-2 */}
      <Row>
        <Col xl={9}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>JOB APPLICATION STATISTICS</Card.Title>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  href="#!"
                  className="p-2 fs-12 text-muted no-caret border-0 d-inline"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  {" "}
                  Sort By{" "}
                  <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  role="menu"
                  // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                  data-popper-placement="bottom-end"
                >
                  <li>
                    <Dropdown.Item href="#!">This Week</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#!">This Month</Dropdown.Item>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <div id="application-statistics">
                <ReactApexChart
                  options={Jobsdata.Applicationstatistics.options}
                  series={Jobsdata.Applicationstatistics.series}
                  type="area"
                  width={"100%"}
                  height={330}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>JOB APPLICANTS</Card.Title>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  href="#!"
                  className="p-2 fs-12 text-muted no-caret border-0 d-inline"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  {" "}
                  Sort By{" "}
                  <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  role="menu"
                  //  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                  data-popper-placement="bottom-end"
                >
                  <li>
                    <Dropdown.Item href="#!">This Week</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#!">This Month</Dropdown.Item>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body className="px-0">
              <div id="job-applicants">
                <ReactApexChart
                  options={Jobsdata.Jobapplicants.options}
                  series={Jobsdata.Jobapplicants.series}
                  type="radar"
                  width={"100%"}
                  height={280}
                />
              </div>
              <div className="row mt-0">
                <div className="col-6 border-end border-inline-end-dashed text-center">
                  <p className="text-muted mb-1 fs-12">Male</p>
                  <h6 className="text-primary">12.34K</h6>
                </div>
                <div className="col-6 text-center">
                  <p className="text-muted mb-1 fs-12">Female</p>
                  <h6 className="text-secondary">10.19K</h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*  End:: row-2 */}

      {/*  Start:: row-3 */}
      <Row>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>TOTAL REVENUE</Card.Title>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  href="#!"
                  className="p-2 fs-12 text-muted no-caret border-0 d-inline"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  {" "}
                  Sort By{" "}
                  <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  role="menu"
                  //  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                  data-popper-placement="bottom-end"
                >
                  <li>
                    <Dropdown.Item href="#!">This Week</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#!">This Month</Dropdown.Item>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <div id="total-revenue">
                <ReactApexChart
                  options={Jobsdata.Jobrevenue.options}
                  series={Jobsdata.Jobrevenue.series}
                  type="bar"
                  width={"100%"}
                  height={263}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={5}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>TOP HIRING COMPANIES</Card.Title>
              <a href="#!" className="fs-12 text-muted">
                {" "}
                View All<i className="ti ti-arrow-narrow-right ms-1"></i>{" "}
              </a>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">Company</th>
                      <th scope="col">Vacancies</th>
                      <th scope="col">Hired</th>
                      <th scope="col">Subscription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-sm avatar-rounded">
                            <img
                              src="../../assets/images/company-logos/10.png"
                              alt=""
                            />
                          </span>
                          <a href="#!" className="fw-medium">
                            Nucleus OP
                          </a>
                        </div>
                      </td>
                      <td>0</td>
                      <td>235</td>
                      <td>
                        <span className="badge bg-primary rounded-pill">
                          Starter
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-sm avatar-rounded">
                            <img
                              src="../../assets/images/company-logos/7.png"
                              alt=""
                            />
                          </span>
                          <a href="#!" className="fw-medium">
                            Data SC
                          </a>
                        </div>
                      </td>
                      <td>15</td>
                      <td>2</td>
                      <td>
                        <span className="badge bg-info rounded-pill">Pro</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-sm avatar-rounded">
                            <img
                              src="../../assets/images/company-logos/6.png"
                              alt=""
                            />
                          </span>
                          <a href="#!" className="fw-medium">
                            Delooit XP
                          </a>
                        </div>
                      </td>
                      <td>773</td>
                      <td>114</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-sm avatar-rounded">
                            <img
                              src="../../assets/images/company-logos/2.png"
                              alt=""
                            />
                          </span>
                          <a href="#!" className="fw-medium">
                            Tech IP
                          </a>
                        </div>
                      </td>
                      <td>23</td>
                      <td>14</td>
                      <td>
                        <span className="badge bg-danger rounded-pill">
                          Premium
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-bottom-0">
                        <div className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-sm avatar-rounded">
                            <img
                              src="../../assets/images/company-logos/1.png"
                              alt=""
                            />
                          </span>
                          <a href="#!" className="fw-medium">
                            LogoTech
                          </a>
                        </div>
                      </td>
                      <td className="border-bottom-0">45</td>
                      <td className="border-bottom-0">23</td>
                      <td className="border-bottom-0">
                        <span className="badge bg-light text-default rounded-pill">
                          Expired
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className="custom-card bg-primary-gradient premium-recruiters-card border-0 shadow-none text-fixed-white">
            <Card.Body>
              <div className="d-flex align-items-top mb-2">
                <div className="flex-fill">
                  <p className="mb-0 op-7 text-fixed-white">
                    Premium Recruiters
                  </p>
                </div>
                <div className="ms-2">
                  <span className="avatar avatar-md bg-secondary svg-white shadow-sm fs-18">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none" />
                      <path
                        d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z"
                        opacity="0.2"
                      />
                      <circle
                        cx="128"
                        cy="120"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      />
                      <rect
                        x="40"
                        y="40"
                        width="176"
                        height="176"
                        rx="8"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      />
                      <path
                        d="M57.78,216a72,72,0,0,1,140.44,0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <span className="fs-5 fw-medium text-fixed-white">9,231</span>
              <span className="fs-12 op-7 ms-1 text-fixed-white">
                <i className="ti ti-trending-up me-1 d-inline-block"></i>0.5%
              </span>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <span className="avatar avatar-md avatar-rounded bg-secondary-transparent svg-secondary me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none" />
                    <circle cx="84" cy="108" r="52" opacity="0.2" />
                    <path
                      d="M10.23,200a88,88,0,0,1,147.54,0"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M172,160a87.93,87.93,0,0,1,73.77,40"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <circle
                      cx="84"
                      cy="108"
                      r="52"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M152.69,59.7A52,52,0,1,1,172,160"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                </span>
                <p className="mb-0 flex-fill">Active Members</p>
                <Button variant="" className="btn btn-light btn-icon btn-sm">
                  <i className="ri-arrow-right-s-line rtl-rotate"></i>
                </Button>
              </div>
              <div className="d-flex align-items-center">
                <h4 className="fw-medium">$12,897</h4>
                <span className="fs-12 text-success ms-1">
                  <i className="ti ti-trending-up me-1 d-inline-block"></i>3.5%
                </span>
              </div>
              <div className="fw-normal d-flex align-items-center mb-2 mt-3">
                <p className="mb-0 flex-fill text-muted">Active Candidates</p>
                <span className="fw-medium">3,274</span>
              </div>
              <ProgressBar
                striped
                animated
                variant="secondary"
                now={25}
                className="progress progress-xs mb-3"
              />
              <div className="fw-normal d-flex align-items-center mb-2">
                <p className="mb-0 flex-fill text-muted">Active Recruiters</p>
                <span className="fw-medium">8,726</span>
              </div>
              <ProgressBar
                striped
                animated
                variant="secondary"
                now={75}
                className="progress progress-xs mb-2"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*  End:: row-3 */}

      {/*  Start:: row-4 */}
      <Row>
        <Col xl={9}>
          <div className="card custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>PENDING REQUEST APPROVALS</Card.Title>
              <div className="d-flex flex-wrap gap-2">
                <div>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Search Here"
                    aria-label=".form-control-sm example"
                  />
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    href="#!"
                    className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Sort By
                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <li>
                      <Dropdown.Item href="#!">New</Dropdown.Item>
                    </li>
                    <li>
                      <Dropdown.Item href="#!">Popular</Dropdown.Item>
                    </li>
                    <li>
                      <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                    </li>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">Position</th>
                      <th scope="col">Experience</th>
                      <th scope="col">Department</th>
                      <th scope="col">Status</th>
                      <th scope="col" className="text-center">
                        No.of Vacancies
                      </th>
                      <th scope="col">Apply Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 bg-primary-transparent">
                            <i className="ri-global-line fs-14"></i>
                          </div>
                          <div className="lh-1">
                            <p className="fw-semibold mb-0">DotNet Developer</p>
                          </div>
                        </div>
                      </td>
                      <td>02 Years</td>
                      <td>
                        <span className="text-primary">Development</span>
                      </td>
                      <td>
                        <span className="badge bg-light text-default">
                          Open
                        </span>
                      </td>
                      <td className="text-center">12</td>
                      <td>14.10.2024</td>
                      <td>
                        <div className="btn-list">
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-primary-light btn-wave"
                          >
                            <i className="ri-check-line"></i>
                          </Button>
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-secondary-light btn-wave"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 bg-secondary-transparent">
                            <i className="ri-exchange-funds-line fs-14"></i>
                          </div>
                          <div className="lh-1">
                            <p className="fw-semibold mb-0">Graphic Designer</p>
                          </div>
                        </div>
                      </td>
                      <td>05 Years</td>
                      <td>
                        <span className="text-secondary">Designing</span>
                      </td>
                      <td>
                        <span className="badge bg-light text-default">
                          Closed
                        </span>
                      </td>
                      <td className="text-center">24</td>
                      <td>10.08.2024</td>
                      <td>
                        <div className="btn-list">
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-primary-light btn-wave"
                          >
                            <i className="ri-check-line"></i>
                          </Button>
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-secondary-light btn-wave"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 bg-success-transparent">
                            <i className="ri-honor-of-kings-line fs-14"></i>
                          </div>
                          <div className="lh-1">
                            <p className="fw-semibold mb-0">Java Developer</p>
                          </div>
                        </div>
                      </td>
                      <td>0 Years</td>
                      <td>
                        <span className="text-success">Customer Support</span>
                      </td>
                      <td>
                        <span className="badge bg-light text-default">
                          Open
                        </span>
                      </td>
                      <td className="text-center">08</td>
                      <td>16.12.2024</td>
                      <td>
                        <div className="btn-list">
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-primary-light btn-wave"
                          >
                            <i className="ri-check-line"></i>
                          </Button>
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-secondary-light btn-wave"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 bg-info-transparent">
                            <i className="ri-a-b fs-14"></i>
                          </div>
                          <div className="lh-1">
                            <p className="fw-semibold mb-0">QA Tester</p>
                          </div>
                        </div>
                      </td>
                      <td>04 Years</td>
                      <td>
                        <span className="text-orange">Quality Analysis</span>
                      </td>
                      <td>
                        <span className="badge bg-light text-default">
                          Open
                        </span>
                      </td>
                      <td className="text-center">26</td>
                      <td>05.11.2024</td>
                      <td>
                        <div className="btn-list">
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-primary-light btn-wave"
                          >
                            <i className="ri-check-line"></i>
                          </Button>
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-secondary-light btn-wave"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 bg-danger-transparent">
                            <i className="ri-exchange-funds-line fs-14"></i>
                          </div>
                          <div className="lh-1">
                            <p className="fw-semibold mb-0">Graphic Designer</p>
                          </div>
                        </div>
                      </td>
                      <td>05 Years</td>
                      <td>
                        <span className="text-info">Marketing</span>
                      </td>
                      <td>
                        <span className="badge bg-light text-default">
                          Closed
                        </span>
                      </td>
                      <td className="text-center">24</td>
                      <td>10.08.2024</td>
                      <td>
                        <div className="btn-list">
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-primary-light btn-wave"
                          >
                            <i className="ri-check-line"></i>
                          </Button>
                          <Button
                            variant=""
                            type="button"
                            className="btn btn-sm btn-icon btn-secondary-light btn-wave"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </div>
        </Col>
        <Col xl={3}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>ACQUISITIONS</Card.Title>
            </Card.Header>
            <Card.Body>
              <ProgressBar className="progress progress-md mb-4 mt-3">
                <ProgressBar variant="primary" now={52} key={1} />
                <ProgressBar variant="secondary" now={12} key={2} />
                <ProgressBar variant="success" now={16} key={3} />
                <ProgressBar variant="warning" now={12} key={4} />
                <ProgressBar variant="danger" now={8} key={5} />
              </ProgressBar>
              <ListGroup className="list-group acquisitions-list mt-1">
                <ListGroup.Item>
                  Total Applications
                  <span className="badge float-end bg-primary-transparent">
                    1,982
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Recruited
                  <span className="badge float-end bg-secondary-transparent">
                    214
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Short Listed
                  <span className="badge float-end bg-success-transparent">
                    262
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Rejected
                  <span className="badge float-end bg-warning-transparent">
                    395
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Blocked
                  <span className="badge float-end bg-danger-transparent">
                    79
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*  End:: row-4 */}
    </Fragment>
  );
};

export default Jobs;
