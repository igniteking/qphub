"use client";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const NumberButton = () => {
  const { user } = useUser(); // Get the user object from Clerk
  const [loading, setLoading] = useState(true);

  const [numberOfResumeUploaded, setNumberOfResumeUploaded] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const clerkId = user?.id; // Get the Clerk ID

        if (!clerkId) {
          console.error("Clerk ID is undefined or empty.");
          return;
        }

        // Construct the URL for the API call
        const url = `${process.env.NEXT_PUBLIC_MYSQL_URL}/MyUploads.php?clerk_id=${clerkId}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();

        // Assuming the API returns an object with 'total_ids'
        setNumberOfResumeUploaded(data.total_ids); // Set the total number of uploaded resumes
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  return (
    <button className="btn btn-secondary-light btn-wave btn-sm">
      <i className="bi bi-cloud-upload align-middle"></i>{" "}
      {loading ? <Loader /> : numberOfResumeUploaded !== null ? numberOfResumeUploaded : "No data"}
    </button>
  );
};

export default NumberButton;
