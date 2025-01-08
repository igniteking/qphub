import Link from "next/link";
import React from "react";
import { Button, Card, CardBody } from "react-bootstrap";

const GetAlerts = () => {
  return (
    <Card className="custom-card">
      <CardBody>
        <div className="">
          <h5 className="fw-medium mb-3">Get Latest Alerts</h5>
          <p>
            Latest candidate updates on the go to recieved direct to your email.
            Stay updated with your latest new candidates list.
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email Here"
              aria-label="blog-email"
              aria-describedby="blog-subscribe"
            />
            <Button
              variant=""
              className="btn btn-primary"
              type="button"
              id="blog-subscribe"
            >
              Subscribe
            </Button>
          </div>
          <label className="form-check-label">
            By Subscribing you accept to{" "}
            <Link scroll={false} href="#!" className="text-success">
              <u>privacy policy</u>
            </Link>
          </label>
        </div>
      </CardBody>
    </Card>
  );
};

export default GetAlerts;
