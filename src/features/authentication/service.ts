import { decrypt, encrypt } from "src/utils/encryption";

const TOKEN_KEY = "token";

export const getToken = () => {
  const encToken = sessionStorage.getItem(TOKEN_KEY);
  return encToken ? decrypt(encToken) : null;
};

export const removeToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};

export const saveToken = (authToken: string) => {
  sessionStorage.setItem(TOKEN_KEY, encrypt(authToken));
};
