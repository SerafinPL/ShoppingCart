import React from "react";

import Button from '../Button/Button';
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.Header}>
    <span>Shopping Cart</span>
    <Button>Proceed to checkout</Button>
  </header>
);

export default Header;
