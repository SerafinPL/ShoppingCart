import React from "react";

import Button from "../Button/Button";
import styles from "./List.module.scss";
import fotoHeadset from "../../images/headphones.png";
import fotoX from "../../images/x-img.png";
import fotoPencil from "../../images/edit-img.png";
import ProductsList from "../ProductsList/ProductsList";

const List = (props) => {
  console.log(props.products);
  return (
    <div className={styles.mainBox}>
      <section className={styles.List}>
        <header>
          <div className={styles.X}></div>
          <div className={styles.grow}></div>
          <p>Product Name</p>
          <p>Unit Price</p>
          <p>Qty</p>
        </header>
        <ProductsList products={props.products} cart={props.cart}/>
        
      </section>
      <footer>
        <Button>Update Shopping Cart</Button>
      </footer>
    </div>
  );
};

export default List;
