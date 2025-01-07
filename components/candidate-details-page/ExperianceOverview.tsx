import React from "react";
import { Card } from "react-bootstrap";

const ExperianceOverview = () => {
  return (
    <Card className="custom-card">
      <Card.Header>
        <Card.Title>Experience Overview</Card.Title>
      </Card.Header>
      <Card.Body className="p-0 candidate-edu-timeline">
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-briefcase fs-13"></i>
            </span>{" "}
            Experience :
          </h5>
          <div className="ms-4 ps-3">
            <p className="fw-medium fs-14 mb-0">
              Full Stack Developer (2019 Mar - 2024 Apr)
            </p>
            <div className="d-flex gap-2">
              <p>Spotech Technical Solutions</p>
              <p className="mb-0 fs-12 text-muted">
                <i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad
              </p>
            </div>
            <p className="fw-medium mb-2">Responsibilities :</p>
            <ol className="list-group border-0 list-bullets">
              <li className="border-0 py-1">
                Design thoughtful, beautiful, and useful software user
                interfaces and experiences in a team environment..
              </li>
              <li className="border-0 py-1">
                Create user-centered designs by considering market analysis,
                customer feedback, and usability findings.
              </li>
            </ol>
          </div>
        </div>
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-people fs-13"></i>
            </span>{" "}
            Volunteer Experience :
          </h5>
          <div className="ms-4 ps-3">
            <p className="fw-medium fs-14 mb-0">
              Volunteer in the Student Organization
            </p>
            <p className="mb-2 text-muted">
              <i className="bi bi-geo-alt fs-12"></i> Warangal, 2015
            </p>
            <ol className="list-group border-0 list-bullets">
              <li className="border-0 py-1">
                In charge of Organizing activities for approximately 100+
                internation schools in 2015
              </li>
              <li className="border-0 py-1">
                In charge of Organizing activities for approximately 100+
                internation schools in 2015
              </li>
            </ol>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExperianceOverview;
