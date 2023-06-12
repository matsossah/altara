import React from "react";
import "./index.css";
import App from "./App";
import "./fonts/ZonaPro/ZonaPro-Bold.otf";
import * as ReactDOMClient from "react-dom/client";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
