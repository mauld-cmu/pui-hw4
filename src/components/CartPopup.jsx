import React from 'react';
import './CartPopup.css';

function CartPopup() {
  return (  
    <div id="cart-popup">
      <p>Added to cart:</p>
      <p id="cart-roll-name">Void Cinnamon Roll</p>
      <p id="cart-glaze-name">Nonexistant Glazing</p>
      <p id="cart-pack-size">Pack of 0</p>
      <p id="cart-pack-price">Price: $0.00</p>
    </div>
  );
}

export default CartPopup;