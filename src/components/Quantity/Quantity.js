import React from "react";

import Button from "../Button/Button";
import styles from './Quantity.module.scss';
import fotoPencil from "../../images/edit-img.png";

const Quantity = (props) => (

    <div className={styles.Qty}>
        <span>-</span>
        <input type='text'/>
        <span>+</span>
    </div>
)


export default Quantity;