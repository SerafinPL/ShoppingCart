import React from "react";

import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import styles from "./ProductsList.module.scss";
import Product from "../Product/Product";
import fotoX from "../../images/x-img.png";

const ProductsList = (props) => {
  let products = [];
  const productToShow = props.cart.forEach((element) => {
    products = props.products.filter((item) => item.id === element.productId);
  });

  console.log(products);

  return products.map((item) => {
    const [qty] = props.cart.filter((element) => element.productId === item.id);
    return <Product value={item} qty={qty.quantity} />;
  });
};

export default ProductsList;
