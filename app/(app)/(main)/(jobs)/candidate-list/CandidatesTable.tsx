"use client";

import { Joblistdata } from "@/shared/data/dashboards/joblistdata";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  CandidateData,
  Education,
  WorkExperience,
  Certification,
  Project,
  Skill,
  Technology,
} from "@/shared/types/types";
import Loader from "@/components/Loader";
import ToastNotification from "@/components/ToastNotification";
import CodeBroke from "@/components/CodeBroke";

interface ResumeData {
  candidateData: CandidateData;
  education: Education[];
  workExperience: WorkExperience[];
  certifications: Certification[];
  projects: Project[];
  skills: Skill[];
  technologies: Technology[];
}

const CandidatesTable = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchResume");
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
        setShowMessage(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <CodeBroke />;

  return (
    <div className="table-responsive">
      <table className="table table-hover text-nowrap">
        <thead>
          <ToastNotification
            show={showMessage}
            setShow={setShowMessage}
            message={message}
          />
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Location</th>
            <th scope="col">Vacancies</th>
            <th scope="col">Status</th>
            <th scope="col">Job Type</th>
            <th scope="col">Posted Date</th>
            <th scope="col">Expires on</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={11}>
                <Loader />
              </td>
            </tr>
          ) : (
            Array.isArray(resumeData?.candidateData) &&
            resumeData.candidateData.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <div className="d-flex">
                    <div className="ms-2">
                      <p className="fw-medium mb-0 d-flex align-items-center">
                        <a href={`/apps/jobs/jobdetails/${item.id}`}>
                          {item.name}
                        </a>{" "}
                        {/* Assuming `name` and `id` are part of `item` */}
                      </p>
                      <p className="fs-12 text-muted mb-0">
                        <Link
                          scroll={false}
                          href={`mailto:${item.mobile}`}
                          className="fw-medium mb-0"
                        >
                          {item.email}
                        </Link>
                      </p>{" "}
                      {/* Assuming `department` is part of `item` */}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">{item.mobile}</div>
                </td>
                <td>{item.location}</td>
                {/* Assuming `applications` is part of `item` */}
                <td>
                  {Array.isArray(resumeData?.workExperience) &&
                    resumeData.workExperience.length > 0 && (
                      <p>First Role: {resumeData.workExperience[0].role}</p>
                    )}
                </td>{" "}
                {/* Assuming `vacancies` is part of `item` */}
                <td>
                  <span
                    className={`badge rounded-pill bg-${item.statusColor}-transparent`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.jobType}</td>{" "}
                {/* Assuming `jobType` is part of `item` */}
                <td>{item.postedDate}</td>{" "}
                {/* Assuming `postedDate` is part of `item` */}
                <td>{item.expiryDate}</td>{" "}
                {/* Assuming `expiryDate` is part of `item` */}
                <td>
                  <Link
                    scroll={false}
                    href={`/apps/jobs/jobdetails/${item.id}`}
                    className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                  <Link
                    scroll={false}
                    href={`#edit/${item.id}`} // Assuming there's an edit page
                    className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1"
                  >
                    <i className="ri-edit-line"></i>
                  </Link>
                  <Link
                    scroll={false}
                    href={`#delete/${item.id}`} // Assuming there's a delete action
                    className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesTable;
