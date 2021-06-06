import React, { useContext } from "react";

import styles from "./Quantity.module.scss";
import fotoPencil from "../../images/edit-img.png";

import { Context } from "../../context/context";

const Quantity = (props) => {
  const context = useContext(Context);
  return (
    <div className={styles.Qty}>
      <span
        onClick={() => {
          props.setQty((value) => value - 1);
        }}
      >
        -
      </span>
      <input className="input" type="text" value={props.qty} readOnly />
      <span
        onClick={() => {
          props.setQty((value) => value + 1);
        }}
      >
        +
      </span>
      <img src={fotoPencil} alt="Pencil" onClick={context.submitChanges} />
    </div>
  );
};

export default Quantity;
