import React, { useContext } from "react";

import Button from "../Button/Button";
import styles from "./SidePanel.module.scss";

import { Context } from "../../context/context";

const SidePanel = () => {
  const context = useContext(Context);

  return (
    <aside className={styles.SidePanel}>
      <div className={styles.Shipping}>
        <span>SHIPPING</span>
        <span>${context.deliveryCost}</span>
      </div>
      <div className={styles.Totals}>
        <p>CART TOTALS</p>
        <div className={`${styles.Box} ${styles.Subtotal}`}>
          <span>Subtotal</span>
          <span className={styles.price}>${context.summ}</span>
        </div>
        <div className={`${styles.Box} ${styles.BorderAbove}`}>
          <span>Grand Total</span>
          <span className={styles.bigPrice}>
            ${Number( Number(context.deliveryCost) + Number(context.summ) ).toFixed(2)}
          </span>
        </div>
        <div className={`${styles.Box} ${styles.SpaceBelow}`}>
          <Button click={() => context.setAllView(false)}>
            Proceed to checkout
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SidePanel;
