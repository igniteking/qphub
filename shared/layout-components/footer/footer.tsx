import Link from "next/link";
import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted">
            {" "}
            Copyright © <span id="year">2025 </span>
            <Link scroll={false} href="#!" className="text-dark fw-medium">
              qphub
            </Link>
            . Designed with{" "}
            <span className="bi bi-heart-fill text-danger"></span> by
            <Link scroll={false} href="https://bimqp.com">
              <span className="fw-medium text-primary mx-1">bimqp</span>
            </Link>{" "}
            All rights reserved
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
