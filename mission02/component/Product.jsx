import contactData from "../Data/production.json";
import Images from "./Images";
import "./Product.css";

function Product() {
  const items = contactData.items.map((item) => {
    return item;
  });

  return (
    <ul>
      {items.map(({ id, "product-name": name, price, imgName }) => {
        const photoUrl = `/images/product/${imgName}.jpeg`;
        return (
          <li key={id}>
            <Images photo={photoUrl} productName={name} />
            <span>{name}</span>
            <span>{price}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Product;
