interface LoginFormElements extends HTMLFormControlsCollection {
  authToken: HTMLInputElement;
}

export interface LoginFormElement extends HTMLFormElement {
  readonly elements: LoginFormElements;
}

export interface LoginFormProps {
  onSubmit: (event: React.FormEvent<LoginFormElement>) => void;
  onChange: () => void;
  isInvalid: boolean;
}
