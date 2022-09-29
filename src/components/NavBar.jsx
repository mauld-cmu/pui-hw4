import React, { Component } from 'react';
import './NavBar.css';
import CartPopup from './CartPopup';

class NavBar extends Component {
  //state = {  } 
  render() { 
    return (
      <nav>
        <div id="products-nav">
          <span>PRODUCTS</span>
        </div>
        <div id="cart-nav">
          <span>CART</span>
          <p id="cart-count">0 items</p>
          <p id="cart-price">Total: $0.00</p>
          <CartPopup/>
        </div>
      </nav>
    );
  }
}
 
export default NavBar;