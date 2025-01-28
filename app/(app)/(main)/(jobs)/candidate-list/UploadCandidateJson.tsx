"use client";
import Loader from "@/components/Loader";
import ToastNotification from "@/components/ToastNotification";
import { useUser } from "@clerk/nextjs";
import React, { Fragment, useState } from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";

const UploadCandidateJson = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState(false);
  const { user } = useUser(); // Get the user object from Clerk

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget); // Extract form data
    const jsonData = formData.get("candidate-json") as string; // Get the JSON string

    if (!jsonData || jsonData.trim() === "") {
      setMessage("Please enter the JSON data and try again.");
      setShowMessage(true);
      setIsLoading(false);
      return;
    }

    if (!file) {
      setMessage("Please select a file to upload.");
      setShowMessage(true);
      setIsLoading(false);
      return;
    }

    try {
      // Validate and parse JSON data
      const parsedData = JSON.parse(jsonData);

      const clerkId = user?.id; // Replace with actual logic to retrieve Clerk ID
      if (!clerkId) {
        setMessage("Clerk ID is missing. Please log in again.");
        setShowMessage(true);
        setIsLoading(false);
        return;
      }

      // Prepare FormData for upload
      const uploadData = new FormData();
      uploadData.append("json", JSON.stringify(parsedData)); // Stringify JSON
      uploadData.append("file", file); // Attach the file
      uploadData.append("clerk_id", clerkId); // Append Clerk ID

      // Define the API endpoint
      const url = `${process.env.NEXT_PUBLIC_MYSQL_URL}/upload-resume-data.php`;

      // Make POST request to the PHP script
      const response = await fetch(url, {
        method: "POST",
        body: uploadData,
      });

      const result = await response.json(); // Parse the response

      if (response.ok) {
        setMessage("Data and file uploaded successfully!");
        setShowMessage(true);
        setTimeout(() => {
          setShow(false);
          window.location.reload();
        }, 1500);
      } else {
        // Display error from server response
        setMessage(`Error: ${result.error || "An unknown error occurred."}`);
        setShowMessage(true);
      }
    } catch (err) {
      console.error("Error during submission:", err);
      setMessage("Error: Invalid JSON format or server error.");
      setShowMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <Button
        variant="primary"
        type="button"
        className="btn btn-primary-light btn-sm"
        data-bs-toggle="offcanvas"
        onClick={handleShow}
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="bi bi-plus-circle me-1"></i> Add Candidate
      </Button>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        className="offcanvas offcanvas-end w-50"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel1"
      >
        <Offcanvas.Header
          closeButton
          className="border-bottom border-block-end-dashed"
        >
          <h5 className="offcanvas-title" id="offcanvasRightLabel1">
            Add Candidate JSON Data
          </h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <ToastNotification
            show={showMessage}
            setShow={setShowMessage}
            message={message}
          />
          <Form onSubmit={handleSubmit} autoComplete="off">
            <div className="p-3">
              <div className="mb-3">
                <Form.Label
                  htmlFor="candidate-email"
                  className="fs-14 text-dark"
                >
                  Enter Resume JSON code
                </Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  className=""
                  name="candidate-json"
                  id="candidate-json"
                  placeholder="JSON code"
                  as="textarea"
                  rows={25}
                />
              </div>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Attach Resume</Form.Label>
                <Form.Control
                  onChange={handleFileChange}
                  type="file"
                  size="lg"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-md-12 btn btn-lg btn-primary"
                type="submit"
              >
                {isLoading ? <Loader /> : "Upload Candidate Details"}
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

export default UploadCandidateJson;
