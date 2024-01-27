import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Product from "./component/Product";

const rootElement = document.getElementById("product");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Product />
  </StrictMode>
);
