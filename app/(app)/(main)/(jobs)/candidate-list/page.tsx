import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
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
import CandidatesTable from "./CandidatesTable";

const Jobslist = async () => {
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
              <CandidatesTable />
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
