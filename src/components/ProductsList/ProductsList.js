import React from "react";

import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";

import Product from "../Product/Product";


const ProductsList = (props) => {
  let products = [];
  const productToShow = props.cart.forEach((element) => {
    products.push(props.products.filter((item) => item.id === element.productId));
  });

  
  const reducedProducts = products.reduce((a, b) => {
    return a.concat(b);
  });
  console.log(reducedProducts)


  return reducedProducts.map((item) => {
    const [qty] = props.cart.filter((element) => element.productId === item.id);
    return <Product key={item.id} value={item} qty={qty.quantity} />;
  });
};

export default ProductsList;
