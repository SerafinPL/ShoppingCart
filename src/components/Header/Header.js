import React, { useContext } from "react";

import Button from "../Button/Button";
import styles from "./Header.module.scss";
import { Context } from "../../context/context";

const Header = () => {
  const context = useContext(Context);

  return (
    <header className={styles.Header}>
      <span>Shopping Cart</span>
      <Button click={() => context.setAllView(false)}>
        Proceed to checkout
      </Button>
    </header>
  );
};

export default Header;
