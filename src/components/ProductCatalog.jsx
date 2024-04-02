import React from "react";
import PropTypes from "prop-types";
import "../style/ProductCatalogstyle.scss";
import Product from "./Product";
import data from "./Datasecond";
function ProductCatalog() {
  return (
    <div className="productBody">
      {data.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}

export default ProductCatalog;
