"use client";
import React, { useState } from "react";
import {
  Badge,
  Card,
  Col,
  Nav,
  Row,
  Tab,
  Table,
  Tooltip,
} from "react-bootstrap";
import SalaryModal from "./DataUpdateModal";
import ComapanyModal from "./ComapanyUpdateModal";
import EditorComponent from "../EditorComponent";

const InternalData = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [monthly1, setMonthly1] = useState<number | "">("");
  const [yearly1, setYearly1] = useState<number | "">("");
  const [monthly2, setMonthly2] = useState<number | "">("");
  const [yearly2, setYearly2] = useState<number | "">("");
  const [monthly3, setMonthly3] = useState<number | "">("");
  const [yearly3, setYearly3] = useState<number | "">("");

  const [showModalComapany1, setShowModalComapany1] = useState(false);
  const [currentCompany1, setcurrentCompany1] = useState<string>("");
  const [showModalComapany2, setShowModalComapany2] = useState(false);
  const [currentCompany2, setcurrentCompany2] = useState<string>("");

  return (
    <Row>
      <SalaryModal
        show={showModal1}
        onHide={() => setShowModal1(false)}
        title="Previous Salary"
        monthly={monthly1}
        yearly={yearly1}
        handleMonthlyChange={(e) => {
          const value = e.target.value ? parseFloat(e.target.value) : "";
          setMonthly1(value);
          setYearly1(value !== "" ? value * 12 : "");
        }}
        handleYearlyChange={(e) => {
          const value = e.target.value ? parseFloat(e.target.value) : "";
          setYearly1(value);
          setMonthly1(value !== "" ? value / 12 : "");
        }}
      />
      <SalaryModal
        show={showModal2}
        onHide={() => setShowModal2(false)}
        title="Current Salary"
        monthly={monthly2}
        yearly={yearly2}
        handleMonthlyChange={(e) => {
          const value = e.target.value ? parseFloat(e.target.value) : "";
          setMonthly2(value);
          setYearly2(value !== "" ? value * 12 : "");
        }}
        handleYearlyChange={(e) => {
          const value = e.target.value ? parseFloat(e.target.value) : "";
          setYearly2(value);
          setMonthly2(value !== "" ? value / 12 : "");
        }}
      />
      <SalaryModal
        show={showModal3}
        onHide={() => setShowModal3(false)}
        title="Expected Salary"
        monthly={monthly3}
        yearly={yearly3}
        handleMonthlyChange={(e) => {
          const value = e.target.value ? parseFloat(e.target.value) : "";
          setMonthly3(value);
          setYearly3(value !== "" ? value * 12 : "");
        }}
        handleYearlyChange={(e) => {
          const value = e.target.value ? parseFloat(e.target.value) : "";
          setYearly3(value);
          setMonthly3(value !== "" ? value / 12 : "");
        }}
      />

      <ComapanyModal
        show={showModalComapany1}
        onHide={() => setShowModalComapany1(false)}
        title="Current Company"
        currentCompany={currentCompany1}
        setcurrentCompany={(e) => setcurrentCompany1(e.target.value)}
      />
      <ComapanyModal
        show={showModalComapany2}
        onHide={() => setShowModalComapany2(false)}
        title="Previous Company"
        currentCompany={currentCompany2}
        setcurrentCompany={(e) => setcurrentCompany2(e.target.value)}
      />

      <Col xl={12}>
        <Card className="custom-card">
          <Card.Header>
            <Card.Title>Internal Data</Card.Title>
          </Card.Header>
          <Card.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav
                className="nav nav-style-1 nav-pills mb-3"
                defaultActiveKey="first"
              >
                <Nav.Link
                  eventKey="first"
                  href="#first"
                  aria-selected="false"
                >
                  Salary
                </Nav.Link>

                <Nav.Link
                  eventKey="second"
                  href="#second"
                  aria-selected="false"
                >
                  Company
                </Nav.Link>

                <Nav.Link href="#third" eventKey="third">
                  Tagged Jobs
                  <span className="badge bg-secondary ms-1 rounded-pill">
                    3
                  </span>
                </Nav.Link>

                <Nav.Link href="#fourth" eventKey="fourth">
                  Notes
                </Nav.Link>
              </Nav>
              <Tab.Content id="myTabContent">
                <Tab.Pane role="tabpanel" eventKey="first">
                  <div className="table-responsive">
                    <Table className="table text-nowrap table-sm">
                      <thead>
                        <tr>
                          <th scope="col">(Yearly)</th>
                          <th scope="col"></th>
                          <th scope="col">Last edit date</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr key={Math.random()}>
                          <th scope="row">Previous Salary:</th>
                          <td>$3,678</td>
                          <td>08/01/2025</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                onClick={() => setShowModal1(true)}
                                className="btn btn-icon btn-sm btn-light"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr key={Math.random()}>
                          <th scope="row">Current Salary:</th>
                          <td>$3,678</td>
                          <td>08/01/2025</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                onClick={() => setShowModal2(true)}
                                className="btn btn-icon btn-sm btn-light"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr key={Math.random()}>
                          <th scope="row">Expected Salary:</th>
                          <td>$3,678</td>
                          <td>08/01/2025</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                onClick={() => setShowModal3(true)}
                                className="btn btn-icon btn-sm btn-light"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane role="tabpanel" eventKey="second">
                  <div className="table-responsive">
                    <Table className="table text-nowrap table-sm">
                      <thead>
                        <tr>
                          <th scope="col">(Yearly)</th>
                          <th scope="col"></th>
                          <th scope="col">Last edit date</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr key={Math.random()}>
                          <th scope="row">Current Comapny:</th>
                          <td>BIMQP</td>
                          <td>08/01/2025</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                onClick={() => setShowModalComapany1(true)}
                                className="btn btn-icon btn-sm btn-light"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr key={Math.random()}>
                          <th scope="row">Previous Comapny:</th>
                          <td>BIMQP</td>
                          <td>08/01/2025</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                onClick={() => setShowModalComapany2(true)}
                                className="btn btn-icon btn-sm btn-light"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane role="tabpanel" eventKey="third">
                  <div className="table-responsive">
                    <Table className="table text-nowrap table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Comapany Name</th>
                          <th scope="col">Designation</th>
                          <th scope="col">Status</th>
                          <th scope="col">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-2 avatar-rounded">
                                <img src="/logo/main-fav.png" alt="img" />
                              </div>
                              <div>
                                <div className="lh-1">
                                  <span>BIMQP</span>
                                </div>
                                <div className="lh-1">
                                  <span className="fs-11 text-muted">
                                    k.micheal@bimqp.com
                                  </span>
                                </div>
                              </div>
                            </div>
                          </th>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="lh-1">
                                  <span>UI Developer</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <Badge bg="success" className={"badge"}>
                              <i className={"align-middle me-1"}></i>Accepted!
                            </Badge>
                          </td>
                          <td>08/01/25</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-2 avatar-rounded">
                                <img src="/logo/main-fav.png" alt="img" />
                              </div>
                              <div>
                                <div className="lh-1">
                                  <span>BIMQP</span>
                                </div>
                                <div className="lh-1">
                                  <span className="fs-11 text-muted">
                                    k.micheal@bimqp.com
                                  </span>
                                </div>
                              </div>
                            </div>
                          </th>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="lh-1">
                                  <span>UI Developer</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <Badge bg="success" className={"badge"}>
                              <i className={"align-middle me-1"}></i>Accepted!
                            </Badge>
                          </td>
                          <td>08/01/25</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-2 avatar-rounded">
                                <img src="/logo/main-fav.png" alt="img" />
                              </div>
                              <div>
                                <div className="lh-1">
                                  <span>BIMQP</span>
                                </div>
                                <div className="lh-1">
                                  <span className="fs-11 text-muted">
                                    k.micheal@bimqp.com
                                  </span>
                                </div>
                              </div>
                            </div>
                          </th>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="lh-1">
                                  <span>UI Developer</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <Badge bg="success" className={"badge"}>
                              <i className={"align-middle me-1"}></i>Accepted!
                            </Badge>
                          </td>
                          <td>08/01/25</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane role="tabpanel" eventKey="fourth">
                  <EditorComponent />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InternalData;
