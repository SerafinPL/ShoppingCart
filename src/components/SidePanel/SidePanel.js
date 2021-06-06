import React from "react";

import Button from "../Button/Button";
import styles from "./SidePanel.module.scss";

const SidePanel = () => (
  <aside className={styles.SidePanel}>
    <div className={styles.Shipping}>
      <span>SHIPPING</span>
      <span>Price</span>
    </div>
    <div className={styles.Totals}>
      <p>CART TOTALS</p>
      <div className={styles.Box}>
        <span>Subtotal</span>
        <span>cena</span>
      </div>
      <div className={`${styles.Box} ${styles.BorderAbove}`}>
        <span>Grand Total</span>
        <span>cena</span>
      </div>
      <div className={styles.Box}>
        <Button>Proceed to checkout</Button>
      </div>
    </div>
  </aside>
);

export default SidePanel;
