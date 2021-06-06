import React from "react";

import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import styles from "./ProductsList.module.scss";

import fotoX from "../../images/x-img.png";


const ProductsList = (props) => {
  let products = [];  
  const productToShow = props.cart.forEach(element => {
    products = props.products.filter(item => item.id === element.productId)
  });  
  
  console.log(products)

  return( products.map((item) => (
    <main key={item.id}className={styles.ProductsList}>
      <img className={styles.X} src={fotoX} alt="X" />
      <div className={styles.Headset}>
        <img src={`images/${item.image}`} alt="Headset" />
      </div>
      <p>{item.name}</p>
      <p>${item.price.toFixed(2)}</p>
      
      <Quantity/>
    </main>
  )))
}

export default ProductsList;
