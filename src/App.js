import "./App.css";
import React from 'react';

import Button from './components/Button/Button';
import Header from './components/Header/Header';
import List from './components/List/List';


import productsData from "./data/products.json";
import cartData from "./data/cart_products.json";

const App = () => {
  console.log(productsData);
  console.log(cartData);

  return (
    <div className="App">
      <Header/>
      <main>
        <List/>

        <aside>
          <div>
            <span>SHIPPING</span>
            <span>Price</span>
          </div>
          <div>
            <p>CART TOTALS</p>
            <div>
              <span>Subtotal</span>
              <span>cena</span>
              <span>Grand Total</span>
              <span>cena</span>
              <Button>Proceed to checout</Button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
