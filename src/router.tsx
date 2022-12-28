import { useMemo } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AppRoute } from "@components/AppRoute";
import { ROUTES as routeConstants } from "@constants/routes";
import Root from "@layout/Root";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import Search from "@pages/Search";

const AppRouter = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: routeConstants.ROOT.PATH,
          element: <Root />,
          children: [
            {
              element: <AppRoute />,
              path: "",
              children: [
                {
                  index: true,
                  element: <Login />,
                },
              ],
            },
            {
              path: "",
              element: <AppRoute authRequired />,
              children: [
                {
                  path: routeConstants.DASHBOARD.SLUG,
                  element: <Profile currentUser />,
                },
                {
                  path: routeConstants.USER_PROFILE.SLUG,
                  element: <Profile />,
                },
                {
                  path: routeConstants.USER_SEARCH.SLUG,
                  element: <Search type="users" queryField="user" />,
                },
              ],
            },
          ],
        },
        {
          path: "*",
          element: <Navigate to={routeConstants.DASHBOARD.SLUG} />,
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
