import { Joblistdata } from "@/shared/data/dashboards/joblistdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  Row,
} from "react-bootstrap";
import UploadCandidateJson from "./UploadCandidateJson";

const Jobslist = async () => {
  async function fetchData() {
    const res = await fetch("/api/fetchMyCandidate", {
      method: "GET",
      cache: "no-store", // Avoid caching for dynamic data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = await fetchData();
  console.log(data);
  return (
    <Fragment>
      {/* Page Header */}
      <Seo title={"Candidate list"} />
      <Pageheader
        Heading="Candidate list"
        Pages={[
          { title: "zazla", active: true },
          { title: "Jobs", active: true },
          { title: "Candidate list", active: false },
        ]}
      />
      {/* Page Header Close */}

      {/* Start::row-1 */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card overflow-hidden">
            <CardHeader className="justify-content-between">
              <CardTitle>All My Candidates</CardTitle>
              <div className="d-flex flex-wrap gap-2">
                <UploadCandidateJson />
                <div>
                  <FormControl
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Search Here"
                    aria-label=".form-control-sm example"
                  />
                </div>
                <Dropdown>
                  <DropdownToggle
                    variant=""
                    href="#!"
                    className="btn btn-primary btn-sm btn-wave no-caret"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By
                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </DropdownToggle>
                  <DropdownMenu role="menu">
                    <li>
                      <DropdownItem href="#!">Posted Date</DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#!">Status</DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#!">Department</DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#!">Job Type</DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#!">Newest</DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#!">Oldest</DropdownItem>
                    </li>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th scope="row" className="ps-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="checkboxNoLabeljob1"
                          value=""
                          aria-label="..."
                        />
                      </th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Department</th>
                      <th scope="col">Applications</th>
                      <th scope="col">Vacancies</th>
                      <th scope="col">Status</th>
                      <th scope="col">Job Type</th>
                      <th scope="col">Posted Date</th>
                      <th scope="col">Expires on</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Joblistdata.map((idx) => (
                      <tr key={Math.random()}>
                        <td className="ps-4">{idx.checked}</td>
                        <td>
                          <div className="d-flex">
                            <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="var(--primary-color)"
                                  d={idx.class2}
                                ></path>
                              </svg>
                            </span>
                            <div className="ms-2">
                              <p className="fw-medium mb-0 d-flex align-items-center">
                                <a href="/apps/jobs/jobdetails/">{idx.class}</a>
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                {idx.class1}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                              <img src={idx.src} alt="" />
                            </span>
                            <Link
                              scroll={false}
                              href="#!"
                              className="fw-medium mb-0"
                            >
                              {idx.text1}
                            </Link>
                          </div>
                        </td>
                        <td>{idx.text3}</td>
                        <td>{idx.number}</td>
                        <td>{idx.number1}</td>
                        <td>
                          <span
                            className={`badge rounded-pill bg-${idx.color1}-transparent`}
                          >
                            {idx.text}
                          </span>
                        </td>
                        <td>{idx.data}</td>
                        <td>{idx.data1}</td>
                        <td>
                          <span
                            className={`badge bg-${idx.color1}-transparent`}
                          >
                            <i className="bi bi-clock me-1"></i>
                            {idx.text2}
                          </span>
                        </td>
                        <td>
                          <Link
                            scroll={false}
                            href="/apps/jobs/jobdetails/"
                            className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1"
                          >
                            <i className="ri-eye-line"></i>
                          </Link>
                          <Link
                            scroll={false}
                            href="#!"
                            className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1"
                          >
                            <i className="ri-edit-line"></i>
                          </Link>
                          <Link
                            scroll={false}
                            href="#!"
                            className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
            {/* <CardFooter className="border-top-0">
              <div className="d-flex align-items-center flex-wrap overflow-auto">
                <div className="mb-2 mb-sm-0">
                  Showing <b>1</b> to <b>10</b> of <b>10</b> entries{" "}
                  <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                </div>
                <div className="ms-auto">
                  <Pagination className="pagination mb-0 overflow-auto">
                    <Pagination.Item disabled>Previous</Pagination.Item>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Item>4</Pagination.Item>
                    <Pagination.Item>5</Pagination.Item>
                    <Pagination.Item className="pagination-next">
                      Next
                    </Pagination.Item>
                  </Pagination>
                </div>
              </div>
            </CardFooter> */}
          </Card>
        </Col>
      </Row>
      {/*End::row-1 */}
    </Fragment>
  );
};

export default Jobslist;
