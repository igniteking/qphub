"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CandidateData, WorkExperience } from "@/shared/types/types";
import Loader from "@/components/Loader";
import ToastNotification from "@/components/ToastNotification";
import CodeBroke from "@/components/CodeBroke";
import { useUser } from "@clerk/nextjs";

interface ResumeData {
  candidateData: CandidateData; // Change this to an object instead of an array
  workExperience: WorkExperience[];
}

const CandidatesTable = () => {
  const [resumeData, setResumeData] = useState<ResumeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState(false);
  const { user } = useUser(); // Get the user object from Clerk

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clerkId = user?.id; // Get the Clerk ID

        if (!clerkId) {
          console.error("Clerk ID is undefined or empty.");
          return;
        }

        // Construct the URL for the API call
        const url = `${process.env.NEXT_PUBLIC_MYSQL_URL}/fetchResume.php?clerk_id=${clerkId}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setResumeData(data); // Set the entire array of candidate data
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        setMessage(error.message);
        setShowMessage(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (error) return <CodeBroke />;

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
                <tr key={data.candidateData.id}>
                  <td>
                    <div className="d-flex">
                      <div className="ms-2">
                        <p className="fw-medium mb-0 d-flex align-items-center">
                          <a href={`/apps/jobs/jobdetails/${data.candidateData.id}`}>
                            {data.candidateData.name}
                          </a>
                        </p>
                        <p className="fs-12 text-muted mb-0">
                          <Link
                            scroll={false}
                            href={`mailto:${data.candidateData.email}`}
                            className="fw-medium mb-0"
                          >
                            {data.candidateData.email}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{data.candidateData.mobile}</td>
                  <td>
                    {data.workExperience.length > 0 &&
                    data.workExperience[0]?.role ? (
                      <p>{data.workExperience[0].role}</p>
                    ) : (
                      <p>No experience available</p>
                    )}
                  </td>
                  <td>{data.candidateData.created_at}</td>
                  <td>
                    <Link
                      scroll={false}
                      href={`/apps/jobs/jobdetails/${data.candidateData.id}`}
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
