import { FormControlProps } from "react-bootstrap";

export interface SearchBarElement extends HTMLFormElement {
  readonly search: HTMLInputElement;
}

export interface SearchBarProps
  extends Pick<FormControlProps, "defaultValue" | "id" | "placeholder"> {
  onSubmit: (event: React.FormEvent<SearchBarElement>) => void;
}
