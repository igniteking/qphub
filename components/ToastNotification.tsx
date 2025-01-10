import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";

const ToastNotification = (props: {
  show: any;
  setShow: any;
  message: string;
}) => {
  return (
    <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
      <Toast
        id="liveToast"
        className="toast fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        onClose={() => props.setShow(false)}
        show={props.show}
        delay={3000}
        autohide
      >
        <Toast.Header className="text-default">
          <img
            className="bd-placeholder-img rounded me-2"
            src="/logo/Zazla_purple.png"
            alt="..."
          />
          <strong className="me-auto">Zazla</strong>{" "}
        </Toast.Header>
        <Toast.Body className=""> {props.message}. </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
