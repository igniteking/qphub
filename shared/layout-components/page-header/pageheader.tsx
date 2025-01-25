"use client";

import React, { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";

interface Page {
  title: string;
  active: boolean;
}

interface PageheaderProps {
  Heading: string;
  Pages: Page[];
  Pagetitle?: boolean;
  customElements?: React.ReactNode;
  show?: boolean;
}

const Pageheader: React.FC<PageheaderProps> = ({
  Heading,
  Pages,
  Pagetitle = false,
  customElements,
  show = false, // Default to false if not provided
}) => {
  return (
    <Fragment>
      <div
        className={`${
          Pagetitle
            ? "d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb"
            : "my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2"
        }`}
      >
        <div>
          {!Pagetitle && (
            <h1 className="page-title fw-medium fs-18 mb-2">{Heading}</h1>
          )}
          <Breadcrumb className="mb-0">
            {Pages.map((ele, index) => (
              <Breadcrumb.Item
                key={index}
                as="li"
                className={`${ele.active ? "" : "noActive"}`}
              >
                {ele.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
        {show && ( // Only show when `show` is true
          Pagetitle ? (
            <p className="mb-0">
              <span className="text-muted">Updated on </span> Yesterday
            </p>
          ) : customElements ? (
            customElements
          ) : (
            <div className="btn-list">
              <button className="btn btn-primary-light btn-wave me-2">
                <i className="bx bx-crown align-middle"></i> Plan Upgrade
              </button>
              <button className="btn btn-secondary-light btn-wave me-0">
                <i className="ri-upload-cloud-line align-middle"></i> Export
                Report
              </button>
            </div>
          )
        )}
      </div>
    </Fragment>
  );
};

export default Pageheader;
