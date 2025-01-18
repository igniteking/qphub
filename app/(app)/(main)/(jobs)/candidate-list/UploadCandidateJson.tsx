"use client";
import Loader from "@/components/Loader";
import ToastNotification from "@/components/ToastNotification";
import React, { Fragment, useState } from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";

const UploadCandidateJson = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [showMessage, setshowMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setisLoading(true);
    // Create FormData object from the form
    const formData = new FormData(e.currentTarget);
    const jsonData = formData.get("candidate-json") as string;

    if (jsonData === "") {
      setMessage("Please enter the JSON data and try again.");
      setshowMessage(true);
      setisLoading(false);
    } else {
      try {
        // Parse JSON to validate the structure
        const parsedData = JSON.parse(jsonData);

        // Send data to the API
        const response = await fetch("/api/upload-resume-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedData),
        });

        if (response.ok) {
          setMessage("Data uploaded successfully!");
          setshowMessage(true);
          setisLoading(false);
          setTimeout(() => {
            setShow(false);
            window.location.reload(); // This will refresh the page
          }, 1500);
        } else {
          const errorData = await response.json();
          setMessage(`Error: ${errorData.error}`);
          setshowMessage(true);
          setisLoading(false);
        }
      } catch (err) {
        setMessage("Invalid JSON format. Please correct it and try again.");
        setshowMessage(true);
        setisLoading(false);
      }
    }
  };
  return (
    <Fragment>
      <Button
        variant="primary"
        type="button"
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
            setShow={setshowMessage}
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
