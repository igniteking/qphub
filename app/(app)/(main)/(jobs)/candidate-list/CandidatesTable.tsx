"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CandidateData, WorkExperience } from "@/shared/types/types";
import Loader from "@/components/Loader";
import ToastNotification from "@/components/ToastNotification";
import CodeBroke from "@/components/CodeBroke";
import { useUser } from "@clerk/nextjs";

interface ResumeData {
  candidateData: CandidateData | null;
  workExperience: WorkExperience[];
}

const CandidatesTable = () => {
  const [resumeData, setResumeData] = useState<ResumeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState(false);
  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;

    const fetchData = async () => {
      if (!user?.id) {
        setError("User authentication failed. No user ID found.");
        setLoading(false);
        return;
      }

      try {
        const url = `${process.env.NEXT_PUBLIC_MYSQL_URL}/fetchResume.php?clerk_id=${user.id}`;
        console.log("Fetching from URL:", url);

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.error) {
          throw new Error(data.error || `Server error: ${response.status}`);
        }

        setResumeData(data);
      } catch (err: any) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoaded, user]);

  if (error) return <CodeBroke errorMessage={error} />;

  return (
    <div className="table-responsive">
      <ToastNotification
        show={showMessage}
        setShow={setShowMessage}
        message={message}
      />
      {loading ? (
        <Loader />
      ) : (
        resumeData.length > 0 && (
          <table className="table table-hover text-nowrap">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Job Role</th>
                <th scope="col">Created On</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {resumeData.map((data, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="d-flex">
                      <div className="ms-2">
                        <p className="fw-medium mb-0 d-flex align-items-center">
                          <a href={`mailto:${data.candidateData?.email}`}>
                            {data.candidateData?.name || "N/A"}
                          </a>
                        </p>
                        <p className="fs-12 text-muted mb-0">
                          <Link
                            scroll={false}
                            href={`mailto:${data.candidateData?.email}`}
                            className="fw-medium mb-0"
                          >
                            {data.candidateData?.email || "N/A"}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{data.candidateData?.designation || "N/A"}</td>
                  <td>
                    {data.workExperience.length > 0
                      ? data.workExperience[0].role
                      : "No experience"}{" "}
                  </td>
                  <td>{data.candidateData?.created_at || "N/A"}</td>
                  <td>
                    <Link
                      scroll={false}
                      target="_blank"
                      href={
                        data.candidateData?.resume_file
                          ? `https://api.bimqp.com/${data.candidateData.resume_file}`
                          : "#"
                      }
                      className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1"
                    >
                      <i className="ri-eye-line"></i>
                    </Link>
                    {/* <Link
                      scroll={false}
                      href={`#edit/${data.candidateData.id}`}
                      className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1"
                    >
                      <i className="ri-edit-line"></i>
                    </Link>
                    <Link
                      scroll={false}
                      href={`#delete/${data.candidateData.id}`}
                      className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default CandidatesTable;
