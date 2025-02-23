import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/app";
import { StrictMode } from "react";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <StrictMode>
    <App />
  </StrictMode>
);
