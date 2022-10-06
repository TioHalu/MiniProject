import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Path from './configs/path';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Path />
  </React.StrictMode>
);

reportWebVitals();