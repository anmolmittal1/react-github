import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { LoginFormProps } from "./interface";

export const LoginForm = ({
  onSubmit,
  onChange,
  isInvalid,
}: LoginFormProps) => (
  <Form noValidate onChange={onChange} onSubmit={onSubmit}>
    <Form.Group className="mb-3 has-validation" controlId="authToken">
      <Form.Label>Github Access Token</Form.Label>
      <Form.Control
        required
        type="password"
        placeholder="Enter Github Access Token"
        isInvalid={isInvalid}
      />
      <Form.Control.Feedback type="invalid">
        Please enter a valid token
      </Form.Control.Feedback>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);
