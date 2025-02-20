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
import CandidateCard from "./candidate-card";
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

  interface RequestData {
    candidate_name: string;
  }

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

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const requestData: RequestData = {
      candidate_name: (event.target as any).candidate_name.value,
    };

    try {
      const url = `${process.env.NEXT_PUBLIC_MYSQL_URL}/fetch_candidates.php`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("Response:", data);
      setCandidates(data.candidates || []);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <div className="input-group companies-search-input">
                      <input
                        type="text"
                        className="form-control form-control-lg w-25"
                        aria-label="Text input with segmented dropdown button"
                        placeholder="Enter candidate name here"
                        name="candidate_name"
                      />
                      <Select
                        // name="state"
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
                        // name="state"
                        options={Data2}
                        className="basic-multi-select"
                        isSearchable
                        menuPlacement="auto"
                        classNamePrefix="Select2"
                        defaultValue={[Data2[0]]}
                      />
                      <button type="submit" className="btn btn-lg btn-primary">
                        <i className="ri-search-line"></i>
                      </button>
                    </div>
                  </form>
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

            {loading && <p>Loading...</p>}

            {/* Render Candidate Cards */}
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))
            ) : (
              <p>No candidates found.</p>
            )}
          </div>

          {/* <Pagination className="mb-4 justify-content-end">
            <Pagination.Item disabled>Prev</Pagination.Item>
            <Pagination.Item active href="#!">
              1
            </Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item className="pagination-next">next</Pagination.Item>
          </Pagination> */}
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
