import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import CandidateDetailsComment from "@/components/candidate-details-page/Comment";
import SkillsCard from "@/components/candidate-details-page/SkillsCard";
import RecentActivity from "@/components/candidate-details-page/RecentActivity";
import ToolsUsed from "@/components/candidate-details-page/ToolsUsed";
import Location from "@/components/candidate-details-page/Location";
import Languages from "@/components/candidate-details-page/Languages";
import GetAlerts from "@/components/candidate-details-page/GetAlerts";
import RelatedProfiles from "@/components/candidate-details-page/RelatedProfiles";
import ProfileInformation from "@/components/candidate-details-page/ProfileInformation";
import ExperianceOverview from "@/components/candidate-details-page/ExperianceOverview";
import DetailsCard from "@/components/candidate-details-page/DetailsCard";
import InternalData from "@/components/candidate-details-page/InternalData";
import ShareProfile from "@/components/candidate-details-page/ShareProfile";
import Test from "@/components/candidate-details-page/Test";
const Candidatedetails = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <Seo title={"Candidate Details"} />
      <Pageheader
        Heading="Candidate Details"
        Pages={[
          { title: "Zazla", active: true },
          { title: "Jobs", active: true },
          { title: "Candidate Details", active: false },
        ]}
        customElements={
          <div className="btn-list">
            <CandidateDetailsComment />
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
        }
      />
      {/* Page Header Close */}

      {/* Start::row-2 */}
      <Row>
        <Col lg={8}>
          <DetailsCard />
          <InternalData />
          <ProfileInformation />
          <ExperianceOverview />
          <ShareProfile />
        </Col>
        <Col lg={4}>
          <SkillsCard />
          <RecentActivity />
          <ToolsUsed />
          <Location />
          <Languages />
          <GetAlerts />
          {/* <RelatedProfiles /> */}
        </Col>
      </Row>
      {/* End::row-2 */}
    </Fragment>
  );
};

export default Candidatedetails;
