import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Product from "./component/Product";
import Images from "./component/Images";

const rootElement = document.getElementById("product");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Images />
    <Product />
  </StrictMode>
);
