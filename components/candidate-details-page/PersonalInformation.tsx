import React from "react";
import { Button, Card } from "react-bootstrap";

const PersonalInformation = () => {
  return (
    <Card className="custom-card overflow-hidden">
      <Card.Header>
        <Card.Title>Personal Information</Card.Title>
      </Card.Header>
      <Card.Body className="p-2">
        <div className="table-responsive">
          <table className="table table-responsive table-borderless">
            <tbody>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Full Name</span>
                </td>
                <td>: Brenda Simpson</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Email</span>
                </td>
                <td>: brendra@gmail.com</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">D.O.B</span>
                </td>
                <td>: 13 Jan 2024</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Gender</span>
                </td>
                <td>: Female</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Age</span>
                </td>
                <td>: 35</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Mobile </span>
                </td>
                <td>: +91 7865343874</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Mother Tongue </span>
                </td>
                <td>: Telugu</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Marital Status </span>
                </td>
                <td>: Unmarried</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Blood Group </span>
                </td>
                <td>: o +ve</td>
              </tr>
              <tr>
                <td className="w-50">
                  <span className="fw-medium">Address </span>
                </td>
                <td>
                  {" "}
                  Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                  Bangalore-560016
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex align-items-center">
          <p className="fs-15 mb-0 me-4 fw-medium">Social :</p>
          <div className="btn-list mb-0">
            <Button
              variant=""
              className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-xxl-0"
            >
              <i className="ri-facebook-line"></i>
            </Button>
            <Button
              variant=""
              className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-xxl-0"
            >
              <i className="ri-twitter-x-line"></i>
            </Button>
            <Button
              variant=""
              className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-xxl-0"
            >
              <i className="ri-instagram-line"></i>
            </Button>
            <Button
              variant=""
              className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-xxl-0"
            >
              <i className="ri-github-line"></i>
            </Button>
            <Button
              variant=""
              className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-xxl-0"
            >
              <i className="ri-youtube-line"></i>
            </Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PersonalInformation;
