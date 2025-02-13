import React from "react";
import { Alert } from "react-bootstrap";

interface CodeBrokeProps {
  errorMessage: string;
}

const CodeBroke: React.FC<CodeBrokeProps> = ({ errorMessage }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{errorMessage}</p>
    </Alert>
  );
};

export default CodeBroke;
