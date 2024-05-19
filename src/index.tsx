import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles.scss";

const domNode = document.getElementById("root");

if (!domNode) {
  throw new Error("Root element not found");
}

const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
