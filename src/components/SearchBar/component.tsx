import { Button, InputGroup, Form } from "react-bootstrap";
import { SearchBarProps } from "./interface";

export const SearchBar = ({ onSubmit, ...rest }: SearchBarProps) => (
  <Form className="mb-2" onSubmit={onSubmit}>
    <InputGroup>
      <Form.Control required type="text" name="search" {...rest} />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </InputGroup>
  </Form>
);
