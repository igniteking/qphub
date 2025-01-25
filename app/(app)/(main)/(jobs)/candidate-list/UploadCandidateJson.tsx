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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Create FormData object from the form
    const formData = new FormData(e.currentTarget);
    const jsonData = formData.get("candidate-json") as string;

    if (jsonData === "") {
      setMessage("Please enter the JSON data and try again.");
      setShowMessage(true);
      setIsLoading(false);
    } else {
      try {
        // Parse JSON to validate the structure
        const parsedData = JSON.parse(jsonData);

        const clerkId = user?.id; // Get the Clerk ID

        if (!clerkId) {
          console.error("Clerk ID is undefined or empty.");
          return;
        }

        // Construct the URL for the API call
        const url = `${process.env.NEXT_PUBLIC_MYSQL_URL}/upload-resume-data.php?clerk_id=${clerkId}`;
        console.log("POST URL:", url);

        // Send data to the API
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedData),
        });

        if (response.ok) {
          setMessage("Data uploaded successfully!");
          setShowMessage(true);
          setIsLoading(false);
          setTimeout(() => {
            setShow(false);
            window.location.reload();
          }, 1500);
        } else {
          const errorData = await response.json();
          setMessage(`Error: ${errorData.sqlMessage}`);
          setShowMessage(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error during fetch:", err); // Log fetch errors
        setMessage("Error parsing JSON: " + err);
        setShowMessage(true);
        setIsLoading(false);
      }
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
