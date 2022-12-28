import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

export const encrypt = (value: string) => {
  return AES.encrypt(
    value,
    import.meta.env.VITE_REACT_APP_SECRET_KEY
  ).toString();
};

export const decrypt = (value: string) => {
  return AES.decrypt(value, import.meta.env.VITE_REACT_APP_SECRET_KEY).toString(
    Utf8
  );
};
