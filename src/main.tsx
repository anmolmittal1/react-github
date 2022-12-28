import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "@context/useAuthContext";
import AppRouter from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
