import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App.jsx";
import "./style/main.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
