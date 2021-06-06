import React from "react";

import styles from "./Button.module.scss";

const Button = (props) => (
  <div className={styles.Button} onClick={props.click}>
    {props.children}
  </div>
);

export default Button;
