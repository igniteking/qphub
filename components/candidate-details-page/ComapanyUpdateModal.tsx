import React from "react";
import { Modal, Form, Row, Col, InputGroup, Button } from "react-bootstrap";

interface ComapanyModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  currentCompany: string;
  setcurrentCompany: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ComapanyModal: React.FC<ComapanyModalProps> = ({
  show,
  onHide,
  title,
  currentCompany,
  setcurrentCompany,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className="slideUp"
      centered
      aria-labelledby={`${title.replace(/\s/g, "")}-label`}
      aria-hidden="true"
    >
      <Modal.Header closeButton>
        <h6 className="modal-title">{title}</h6>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="mt-3" xl={12} lg={12} md={12} sm={12}>
            <Form.Label htmlFor={`${title}-company`}>
              {title}
            </Form.Label>
            <InputGroup className="flex-nowrap">
              <Form.Control
                id={`${title}-company`}
                type="text"
                placeholder="Company Name"
                value={currentCompany}
                onChange={setcurrentCompany}
              />
            </InputGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ComapanyModal;
