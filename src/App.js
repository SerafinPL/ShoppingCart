import "./App.css";
import React from 'react';

import Button from './components/Button/Button';
import Header from './components/Header/Header';
import List from './components/List/List';
import SidePanel from './components/SidePanel/SidePanel';


import productsData from "./data/products.json";
import cartData from "./data/cart_products.json";

const App = () => {
  console.log(productsData);
  console.log(cartData);

  return (
    <div className="App">
      <Header/>
      <main>
        <List products={productsData} cart={cartData}/>
        <SidePanel/>

        
      </main>
    </div>
  );
}

export default App;
