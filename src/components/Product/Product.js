import React from "react";

import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import styles from "./Product.module.scss";

import fotoX from "../../images/x-img.png";


const Product = ({value}) => (

    <main key={value.id}className={styles.Product}>
      <img className={styles.X} src={fotoX} alt="X" />
      <div className={styles.Headset}>
        <img src={`images/${value.image}`} alt="Headset" />
      </div>
      <p>{value.name}</p>
      <p>${value.price.toFixed(2)}</p>
      
      <Quantity />
    </main>
)
  
  
  


export default Product;