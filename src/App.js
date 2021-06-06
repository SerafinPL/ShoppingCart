import "./App.css";
import React from "react";

import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

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
