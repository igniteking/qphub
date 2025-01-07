import { currencyOptions } from "@/shared/CurrencyOptions";
import getSymbolFromCurrency from "currency-symbol-map";
import React, { useState } from "react";
import { Modal, Form, Row, Col, InputGroup, Button } from "react-bootstrap";

interface SalaryModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  monthly: number | "";
  yearly: number | "";
  handleMonthlyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearlyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SalaryModal: React.FC<SalaryModalProps> = ({
  show,
  onHide,
  title,
  monthly,
  yearly,
  handleMonthlyChange,
  handleYearlyChange,
}) => {
  const [currencyLogo, setCurrencyLogo] = useState("");

  const handleCurrencyLogo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;

    const logo = getSymbolFromCurrency(selectedCurrency);
    setCurrencyLogo(logo || "Unknown");
  };

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
        <Form.Select
          onChange={handleCurrencyLogo}
          aria-label="Default select example"
        >
          <option>Select Currency here</option>
          {currencyOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        <Row>
          <Col className="mt-3" xl={6} lg={6} md={6} sm={12}>
            <Form.Label htmlFor={`${title}-monthly`}>Monthly</Form.Label>
            <InputGroup className="flex-nowrap">
              <InputGroup.Text>{currencyLogo}</InputGroup.Text>
              <Form.Control
                id={`${title}-monthly`}
                type="number"
                placeholder="Number"
                value={monthly}
                onChange={handleMonthlyChange}
              />
            </InputGroup>
          </Col>
          <Col className="mt-3" xl={6} lg={6} md={6} sm={12}>
            <Form.Label htmlFor={`${title}-yearly`}>Yearly</Form.Label>
            <InputGroup className="flex-nowrap">
              <InputGroup.Text>{currencyLogo}</InputGroup.Text>
              <Form.Control
                id={`${title}-yearly`}
                type="number"
                placeholder="Number"
                value={yearly}
                onChange={handleYearlyChange}
              />
            </InputGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          onClick={onHide}
          data-bs-dismiss="modal"
        >
          Close
        </Button>
        <Button variant="outline-primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SalaryModal;
