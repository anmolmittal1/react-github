import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";

import { AppRoute } from "@components/AppRoute";
import Root from "@layout/Root";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import Search from "@pages/Search";

const ROUTES: Array<Record<string, any>> = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        auth: false,
        element: <Login />,
      },
      {
        path: "dashboard",
        auth: true,
        element: <Profile currentUser />,
      },
      {
        path: "users/:username",
        auth: true,
        element: <Profile />,
      },
      {
        path: "search/user",
        auth: true,
        element: <Search type="users" queryField="user" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="dashboard" />,
  },
];

function createReactRoutes(routes: typeof ROUTES): RouteObject[] {
  return routes.map((route: Record<string, any>) => {
    const { auth, element, children } = route;
    if (typeof auth === "boolean") {
      route.element = <AppRoute authRequired={auth}> {element} </AppRoute>;
    }
    if (children?.length) {
      route.children = createReactRoutes(children);
    }
    return route;
  });
}

const router = createBrowserRouter(createReactRoutes(ROUTES));

export default router;
