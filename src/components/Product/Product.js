import React, { useState, useContext } from "react";

import Quantity from "../Quantity/Quantity";
import styles from "./Product.module.scss";
import { Context } from "../../context/context";

import fotoX from "../../images/x-img.png";

const Product = ({ value, qty }) => {
  const [quantity, setQuantity] = useState(qty);
  const [view, setView] = useState(true);
  const context = useContext(Context);

  const clearProduct = () => {
    setView(false);
    context.submitChanges();
  };

  let product = null;

  product = view && (
    <main key={value.id} className={styles.Product}>
      <img className={styles.X} src={fotoX} alt="X" onClick={clearProduct} />
      <div className={styles.Headset}>
        <img src={`images/${value.image}`} alt="Headset" />
      </div>
      <p>{value.name}</p>
      <p>
        <span>$</span>
        <span className="price">{value.price.toFixed(2)}</span>
      </p>

      <Quantity qty={quantity} setQty={setQuantity} />
    </main>
  );

  return product;
};

export default Product;
