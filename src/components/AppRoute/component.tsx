import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "@context/useAuthContext";
import { ROUTES as routeConstants } from "@constants/routes";
import { AppRouteProps } from "./interface";

export const AppRoute = ({ authRequired }: AppRouteProps) => {
  const { token } = useAuthContext();
  if (authRequired && !token) {
    return <Navigate to={routeConstants.ROOT.PATH} />;
  }
  if (!authRequired && token) {
    return <Navigate to={routeConstants.DASHBOARD.PATH} />;
  }
  return <Outlet />;
};
