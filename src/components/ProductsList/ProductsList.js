import React from "react";

import Product from "../Product/Product";

const ProductsList = (props) => {
  let products = [];
  props.cart.forEach((element) => {
    products.push(
      props.products.filter((item) => item.id === element.productId)
    );
  });

  const reducedProducts = products.reduce((a, b) => {
    return a.concat(b);
  });

  return reducedProducts.map((item) => {
    const [qty] = props.cart.filter((element) => element.productId === item.id);
    return <Product key={item.id} value={item} qty={qty.quantity} />;
  });
};

export default ProductsList;
