import { useState } from "react";

import {
  getToken,
  removeToken,
  saveToken,
} from "@features/authentication/service";
import { getCurrentUser } from "@features/user/service";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(getToken);

  const logout = () => {
    setToken(null);
    removeToken();
  };

  const login = async (authToken: string) => {
    try {
      const response = await getCurrentUser(authToken);
      if (response.status != 200) {
        throw new Error("Invalid Token");
      }
      setToken(authToken);
      saveToken(authToken);
      return response;
    } catch (err) {
      logout();
      return null;
    }
  };

  return { token, login, logout };
};
