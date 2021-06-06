import React , {useContext}from "react";

import Header from "../Header/Header";
import List from "../List/List";
import SidePanel from "../SidePanel/SidePanel";

import productsData from "../../data/products.json";
import cartData from "../../data/cart_products.json";
import {Context} from '../../context/context';
import styles from './ShoppingCart.module.scss';


const ShoppingCart = () => {
    const context = useContext(Context);

    const view = context.allView ?  
    <React.Fragment>   
    <Header />
    <main>
      <List products={productsData} cart={cartData} />
      <SidePanel />
    </main>
    </React.Fragment> 
    : 
    <div className={styles.Message}>
        <h1 >Your order has been submitted successfully!</h1>
    </div>;

  return view;
    
  
};

export default ShoppingCart;
