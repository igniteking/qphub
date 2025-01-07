import React from "react";
import { Card } from "react-bootstrap";

const ProfileInformation = () => {
  return (
    <Card className="custom-card">
      <Card.Header>
        <Card.Title>Candidate Profile Information</Card.Title>
      </Card.Header>
      <Card.Body className="p-0 candidate-edu-timeline">
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-briefcase fs-13"></i>
            </span>{" "}
            Career Objective :
          </h5>
          <div className="ms-4 ps-3">
            <p className="op-9">
              Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit
              ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit
              ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed
              ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus
              minima facilis...
            </p>
            <p className="mb-0 op-9">
              Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum
              sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no
              sed ipsum ipsum nonumy vero sanctus labore..
            </p>
          </div>
        </div>
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-mortarboard fs-13"></i>
            </span>{" "}
            Education :
          </h5>
          <div className="ms-4 ps-3">
            <p className="fw-medium fs-14 mb-0">
              Bachelors of science in computer science
            </p>
            <div className="d-flex gap-2">
              <p className="mb-0">Dwayne University</p>
              <p className="mb-0 text-muted">
                <i className="bi bi-geo-alt fs-12"></i> Nellore
              </p>
            </div>
            <p className="mb-4"> (2019 Mar - 2024 Apr)</p>
            <p className="fw-medium fs-14 mb-0">Intermediate (MPC)</p>
            <div className="d-flex gap-2">
              <p className="mb-0">Sprect College</p>
              <p className="mb-0 text-muted">
                <i className="bi bi-geo-alt fs-12"></i> Warangal
              </p>
            </div>
            <p className="mb-0"> (2017 Mar - 2019 Apr)</p>
          </div>
        </div>
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-award fs-13"></i>
            </span>{" "}
            Certifications :
          </h5>
          <div className="ms-4 ps-3">
            <p className="fw-medium fs-14 mb-0">Web Development (3 Months)</p>
            <p className="mb-4">EMC Solutions Pvt Ltd</p>
            <p className="fw-medium fs-14 mb-0">
              Python Development (6 Months)
            </p>
            <p className="mb-0">Dabre Services Pvt Ltd</p>
          </div>
        </div>
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-journal-medical fs-13"></i>
            </span>{" "}
            Publications :
          </h5>
          <div className="ms-3">
            <ol className="list-group border-0 list-bullets">
              <li className="border-0 py-1">
                <span className="fw-medium">“One of a Kind Design,”</span> Web
                Design Book, Poulin Publishing, 2018
              </li>
              <li className="border-0 py-1">
                <span className="fw-medium">“Website Design in 2019,”</span> A
                List Apart, June 2019
              </li>
              <li className="border-0 py-1">
                <span className="fw-medium">
                  “Usable Information Architecture,”
                </span>{" "}
                SitePoint, Feb 2019
              </li>
            </ol>
          </div>
        </div>
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-activity fs-13"></i>
            </span>{" "}
            Activities and Interests :
          </h5>
          <div className="ms-3">
            <ol className="list-group border-0 list-bullets">
              <li className="border-0 py-1">Community Involvement</li>
              <li className="border-0 py-1">Yoga</li>
              <li className="border-0 py-1">Travel</li>
              <li className="border-0 py-1">Art</li>
            </ol>
          </div>
        </div>
        <div className="p-4 border-bottom">
          <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
            <span className="avatar avatar-rounded bg-primary avatar-sm">
              <i className="bi bi-link-45deg fs-13"></i>
            </span>{" "}
            References :
          </h5>
          <div className="ms-4 ps-3">
            <p>
              <span className="fw-medium">Name : </span> Nicole Chiu
            </p>
            <p>
              <span className="fw-medium">Designation : </span> Software
              Developer
            </p>
            <p>
              <span className="fw-medium">Company Name : </span> Spotech
              Technical Solutions
            </p>
            <p>
              <span className="fw-medium">Mobile : </span> +91 7865443679
            </p>
            <p>
              <span className="fw-medium">Email : </span> nchiu@email.com
            </p>
            <p className="mb-0">
              <span className="fw-medium">Location : </span> Hyderabad
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileInformation;
