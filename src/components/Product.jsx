import "../style/ProductStyle.scss";
import React from "react";
function Product({ name, price, image, description }) {
  return (
    <div className="productbody">
      <figure>
        <img src={image} alt={name} className="productImage" />

        <figcaption>{name}</figcaption>
        <p>{price}</p>
      </figure>
    </div>
  );
}

export default Product;
