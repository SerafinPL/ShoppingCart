import React, { useState } from "react";

import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import styles from "./Product.module.scss";

import fotoX from "../../images/x-img.png";

const Product = ({ value, qty }) => {
  const [quantity, setQuantity] = useState(qty);


  return (
    <main key={value.id} className={styles.Product}>
      <img className={styles.X} src={fotoX} alt="X" />
      <div className={styles.Headset}>
        <img src={`images/${value.image}`} alt="Headset" />
      </div>
      <p>{value.name}</p>
      <p><span>$</span><span className='price'>{value.price.toFixed(2)}</span></p>

      <Quantity qty={quantity} setQty={setQuantity}/>
    </main>
  );
};

export default Product;
