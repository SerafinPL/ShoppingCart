import "./App.css";
import React from "react";

import Button from "./components/Button/Button";

import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

import productsData from "./data/products.json";
import cartData from "./data/cart_products.json";

import Context from "./context/context";

const App = () => {
  return (
    <div className="App">
      <Context>
        <ShoppingCart />
      </Context>
    </div>
  );
};

export default App;
