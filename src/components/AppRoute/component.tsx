import { Navigate } from "react-router-dom";

import { useAuthContext } from "@context/useAuthContext";
import { AppRouteProps } from "./interface";

export const AppRoute = ({ children, authRequired = false }: AppRouteProps) => {
  const { token } = useAuthContext();
  if (authRequired && !token) {
    return <Navigate to="/" />;
  }
  if (!authRequired && token) {
    return <Navigate to="dashboard" />;
  }
  return <>{children}</>;
};
