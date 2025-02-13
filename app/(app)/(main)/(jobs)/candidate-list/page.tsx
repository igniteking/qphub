import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import UploadCandidateJson from "./UploadCandidateJson";
import CandidatesTable from "./CandidatesTable";
import NumberOfResumeByMe from "./NumberOfResumeByMe";
import CopyPrompt from "./CopyPrompt";

const Candidatelist = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <Seo title="Candidate list" />
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
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <CandidatesTable />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* End::row-1 */}
    </Fragment>
  );
};

export default Candidatelist;
