import React from "react";
import {
  Card,
  Col,
  Nav,
  OverlayTrigger,
  Row,
  Tab,
  Tooltip,
} from "react-bootstrap";

const CandidateInternalData = () => {
  return (
    <Row>
      <Col xl={12}>
        <Card className="custom-card">
          <Card.Header>
            <Card.Title>Internal Data</Card.Title>
          </Card.Header>
          <Card.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="second">
              <Nav
                className="nav nav-style-1 nav-pills mb-3"
                defaultActiveKey="first"
              >
                <Nav.Link
                  eventKey="first"
                  href="#nav-products"
                  aria-selected="false"
                >
                  Custom Data
                </Nav.Link>

                <Nav.Link href="#nav-cart" eventKey="second">
                  Tagged Jobs
                  <span className="badge bg-secondary ms-1 rounded-pill">
                    3
                  </span>
                </Nav.Link>

                {/* <Nav.Link
                        href="#nav-orders"
                        eventKey="third"
                        aria-selected="false"
                      >
                        Orders
                        <span className="badge bg-success ms-1 rounded-pill">
                          4
                        </span>
                      </Nav.Link>

                      <Nav.Link
                        href="#nav-offers"
                        eventKey="fourth"
                        aria-selected="false"
                      >
                        Offers
                      </Nav.Link> */}
              </Nav>
              <Tab.Content id="myTabContent">
                <Tab.Pane role="tabpanel" eventKey="first">
                  <Row>
                    <Col lg={6}>
                      <p className="mb-0 flex-grow-1">
                        <span className="text-muted">
                          Previous Salary (Yearly) :
                        </span>
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
                        <span className="text-muted"> Current Comapny :</span>{" "}
                        <span className="fw-medium"> BIMQP</span>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
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
                    </Col>
                    <Col lg={6}>
                      <p className="mb-0">
                        <span className="text-muted"> Current Comapny :</span>{" "}
                        <span className="fw-medium"> BIMQP</span>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
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
                    </Col>
                    <Col lg={6}>
                      <p className="mb-0">
                        <span className="text-muted"> Current Comapny :</span>{" "}
                        <span className="fw-medium"> BIMQP</span>
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane role="tabpanel" eventKey="second">
                  {" "}
                  How hotel deals can help you live a better life.{" "}
                  <b>How celebrity cruises</b>
                  aren't as bad as you think. How cultural solutions can help
                  you predict the future. How to cheat at dog friendly hotels
                  and get away with it. 17 problems with summer activities. How
                  to cheat at travel agents and get away with it. How not
                  knowing family trip ideas makes you a rookie. What everyone is
                  saying about daily deals. How twitter can teach you about
                  carnival cruises. How to start using cultural solutions.
                </Tab.Pane>
                <Tab.Pane role="tabpanel" eventKey="third">
                  {" "}
                  Unbelievable healthy snack success stories. 12 facts about
                  safe food handling tips that will impress your friends.
                  Restaurant weeks by the numbers. Will mexican food ever rule
                  the world? The 10 best thai restaurant youtube videos. How
                  restaurant weeks can make you sick. The complete beginner's
                  guide to cooking healthy food. Unbelievable food stamp success
                  stories. How whole foods markets are making the world a better
                  place. 16 things that won't happen in dish reviews.
                </Tab.Pane>
                <Tab.Pane role="tabpanel" eventKey="fourth">
                  Why delicious magazines are killing you. Why our world would
                  end if restaurants disappeared. Why restaurants are on crack
                  about restaurants. How restaurants are making the world a
                  better place. 8 great articles about minute meals. Why our
                  world would end if healthy snacks disappeared. Why the world
                  would end without mexican food. The evolution of chef
                  uniforms. How not knowing food processors makes you a rookie.
                  Why whole foods markets beat peanut butter on pancakes.
                  reviews.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CandidateInternalData;
