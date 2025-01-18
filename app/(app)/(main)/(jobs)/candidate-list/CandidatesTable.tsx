import { Joblistdata } from "@/shared/data/dashboards/joblistdata";
import Link from "next/link";
import React from "react";

const CandidatesTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th scope="row" className="ps-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabeljob1"
                value=""
                aria-label="..."
              />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col">Applications</th>
            <th scope="col">Vacancies</th>
            <th scope="col">Status</th>
            <th scope="col">Job Type</th>
            <th scope="col">Posted Date</th>
            <th scope="col">Expires on</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Joblistdata.map((idx) => (
            <tr key={Math.random()}>
              <td className="ps-4">{idx.checked}</td>
              <td>
                <div className="d-flex">
                  <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path fill="var(--primary-color)" d={idx.class2}></path>
                    </svg>
                  </span>
                  <div className="ms-2">
                    <p className="fw-medium mb-0 d-flex align-items-center">
                      <a href="/apps/jobs/jobdetails/">{idx.class}</a>
                    </p>
                    <p className="fs-12 text-muted mb-0">{idx.class1}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                    <img src={idx.src} alt="" />
                  </span>
                  <Link scroll={false} href="#!" className="fw-medium mb-0">
                    {idx.text1}
                  </Link>
                </div>
              </td>
              <td>{idx.text3}</td>
              <td>{idx.number}</td>
              <td>{idx.number1}</td>
              <td>
                <span
                  className={`badge rounded-pill bg-${idx.color1}-transparent`}
                >
                  {idx.text}
                </span>
              </td>
              <td>{idx.data}</td>
              <td>{idx.data1}</td>
              <td>
                <span className={`badge bg-${idx.color1}-transparent`}>
                  <i className="bi bi-clock me-1"></i>
                  {idx.text2}
                </span>
              </td>
              <td>
                <Link
                  scroll={false}
                  href="/apps/jobs/jobdetails/"
                  className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1"
                >
                  <i className="ri-eye-line"></i>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1"
                >
                  <i className="ri-edit-line"></i>
                </Link>
                <Link
                  scroll={false}
                  href="#!"
                  className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                >
                  <i className="ri-delete-bin-line"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesTable;
