function Images({ photo, productName }) {
  return (
    <figure>
      <img src={photo} alt={productName} height={100} />
    </figure>
  );
}

export default Images;
