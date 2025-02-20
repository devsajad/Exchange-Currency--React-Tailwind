import ReactDOM from "react-dom/client";

import App from "./app.jsx";
import { StrictMode } from "react";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <StrictMode>
    <App />
  </StrictMode>
);
