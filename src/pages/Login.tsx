import { useState } from "react";

import { useAuthContext } from "@context/useAuthContext";
import {
  LoginForm,
  LoginFormElement,
} from "@features/authentication/components";

const Login = () => {
  const { login } = useAuthContext();
  const [isFormInvalid, setIsFormInvalid] = useState<boolean>(false);

  /**
   * @description Try to login the user when form is submitted
   * @param event Form submit event
   */
  const loginFormSubmit = (event: React.FormEvent<LoginFormElement>) => {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    login(currentTarget.elements.authToken.value)
      .then((result) => {
        if (!result) {
          throw new Error("Login Failure");
        }
      })
      .catch(() => {
        setIsFormInvalid(true);
      })
      .finally(() => {
        currentTarget.reset();
      });
  };

  /**
   * @description Makr form as not invalid when input is changed
   */
  const onInputChange = () => {
    if (isFormInvalid) {
      setIsFormInvalid(false);
    }
  };

  return (
    <LoginForm
      onSubmit={loginFormSubmit}
      onChange={onInputChange}
      isInvalid={isFormInvalid}
    />
  );
};

export default Login;
