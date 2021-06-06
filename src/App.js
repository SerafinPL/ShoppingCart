import "./App.css";
import React from "react";

import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import SidePanel from "./components/SidePanel/SidePanel";

import productsData from "./data/products.json";
import cartData from "./data/cart_products.json";

import Context from "./context/context";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Context>
          <List products={productsData} cart={cartData} />
          <SidePanel />
        </Context>
      </main>
    </div>
  );
};

export default App;
