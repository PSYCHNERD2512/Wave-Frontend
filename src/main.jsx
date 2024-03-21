import React from "react";
import ReactDOM from "react-dom/client";

import AuthProvider from "./provider/authProvider";
import Routes from "./routes";

import "./axios_interceptor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
);
