import React, {useContext}from "react";

import Button from "../Button/Button";
import styles from "./Quantity.module.scss";
import fotoPencil from "../../images/edit-img.png";

import {Context} from '../../context/context';

const Quantity = (props) => (
  <div className={styles.Qty}>
    <span
      onClick={() => {
        props.setQty((value) => value - 1);
      }}
    >
      -
    </span>
    <input className='input' type="text" value={props.qty} />
    <span
      onClick={() => {
        props.setQty((value) => value + 1);
      }}
    >
      +
    </span>
    <img src={fotoPencil} alt="Pencil" />
  </div>
);

export default Quantity;
