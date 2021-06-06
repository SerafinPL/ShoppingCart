import React, {useContext}from "react";

import Button from "../Button/Button";
import styles from "./List.module.scss";

import ProductsList from "../ProductsList/ProductsList";

import {Context} from '../../context/context';

const List = (props) => {
  const context = useContext(Context);
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
        {context.viewProd && <ProductsList products={props.products} cart={props.cart}/>}
        
      </section>
      <footer>
        <Button click={context.submitChanges}>Update Shopping Cart</Button>
      </footer>
    </div>
  );
};

export default List;
