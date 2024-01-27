import contactData from "../Data/production.json";

function Product() {
  const items = contactData.items.map((item) => {
    return item;
  });

  return (
    <>
      {items.map(({ id, "product-name": name, price }) => {
        return (
          <div key={id}>
            <span className="productName">{name}</span>
            <span className="price">{price}</span>
          </div>
        );
      })}
    </>
  );
}

export default Product;
