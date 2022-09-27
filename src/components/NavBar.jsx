import React, { Component } from 'react';
import './NavBar.css';

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
        </div>
      </nav>
    );
  }
}
 
export default NavBar;