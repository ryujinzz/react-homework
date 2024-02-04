const getProductImageURL = (product) => {
  return `${import.meta.env.VITE_PB_API}/files/${product.collectionId}/${
    product.id
  }/${product.photo}`;
};

export const Product = (product) => {
  return (
    <li>
      <a href="#">
        <Thumbnail {...product} className="w-1/2" />
        <p>{product.brand}</p>
        <Price {...product} />
        <span>{product.description}</span>
        <Keyword {...product} />
      </a>
    </li>
  );
};

const Thumbnail = (product) => (
  <figure>
    <img src={`${getProductImageURL(product)}`} alt={product.brand} />
    <figcaption
      aria-label={`${product.brand}을(를) 장바구니에 담기`}
    ></figcaption>
  </figure>
);

const Price = (product) => {
  const realPrice = (
    Math.floor(
      (product.price * (1 - 0.01 * (product.discount ? product.discount : 0))) /
        10
    ) * 10
  ).toLocaleString("ko-KR");

  return (
    <>
      <p>
        {product.discount != 0 ? <span>{product.discount}%</span> : ""}
        <span>{realPrice}원</span>
      </p>
      {product.discount != 0 ? (
        <p>{product.price.toLocaleString("ko-KR")}원</p>
      ) : (
        ""
      )}
    </>
  );
};

const Keyword = (product) => (
  <p>
    {product.karly_only == 1 ? (
      <span>Karly Only</span>
    ) : product.karly_only == 2 ? (
      <span>희소가치 프로젝트</span>
    ) : (
      ""
    )}
    {product.limited == 1 ? <span>한정수량</span> : ""}
  </p>
);
