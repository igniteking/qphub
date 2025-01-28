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
import NumberOfResumeByMe from "./NumberOfResumeByMe";
import CopyPrompt from "./CopyPrompt";

const Candidatelist = async () => {
  return (
    <Fragment>
      {/* Page Header */}
      <Seo title={"Candidate list"} />
      <Pageheader
        Heading="Candidate list"
        Pages={[
          { title: "qpHub", active: true },
          { title: "Jobs", active: true },
          { title: "Candidate list", active: false },
        ]}
        show={true}
        customElements={<CopyPrompt />}
      />
      {/* Page Header Close */}

      {/* Start::row-1 */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card overflow-hidden">
            <CardHeader className="justify-content-between">
              <CardTitle>All My Candidates</CardTitle>
              <div className="d-flex flex-wrap gap-2">
                <NumberOfResumeByMe />
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
          </Card>
        </Col>
      </Row>
      {/*End::row-1 */}
    </Fragment>
  );
};

export default Candidatelist;
