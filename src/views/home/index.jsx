import React, { Component } from 'react';
import './Homepage.css';
import logo from './logo-01.svg';
import NavBar from '../../components/NavBar';
import Roll from '../../components/Roll';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls: [
        {
          name: "original",
          displayName: "Original cinnamon roll",
          imageURL: "/assets/original-cinnamon-roll.jpg",
          imageAlt: "Photo of original flavor cinnamon roll",
          basePrice: 2.49,
        },
        {
          name: "apple",
          displayName: "Apple cinnamon roll",
          imageURL: "/assets/apple-cinnamon-roll.jpg",
          imageAlt: "Photo of apple flavored cinnamon roll",
          basePrice: 3.49,
        },
        {
          name: "raisin",
          displayName: "Raisin cinnamon roll",
          imageURL: "/assets/raisin-cinnamon-roll.jpg",
          imageAlt: "Photo of raisin flavored cinnamon roll",
          basePrice: 2.99,
        },
        {
          name: "walnut",
          displayName: "Walnut cinnamon roll",
          imageURL: "/assets/walnut-cinnamon-roll.jpg",
          imageAlt: "Photo of walnut flavored cinnamon roll",
          basePrice: 3.49,
        },
        {
          name: "chocolate",
          displayName: "Double-chocolate cinnamon roll",
          imageURL: "/assets/double-chocolate-cinnamon-roll.jpg",
          imageAlt: "Photo of double chocolate flavored cinnamon roll",
          basePrice: 3.99,
        },
        {
          name: "strawberry",
          displayName: "Strawberry cinnamon roll",
          imageURL: "/assets/strawberry-cinnamon-roll.jpg",
          imageAlt: "Photo of Strawberry flavored cinnamon roll",
          basePrice: 3.99,
        }
      ]
    };
  }

  priceFormatter(unformattedPrice) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(unformattedPrice);
  }

  render() { 
    // Loops through the rolls list, passes props to Roll Components
    const gridItems = this.state.rolls.map((item) =>
      <Roll
        key={item.name}
        displayName={item.displayName}
        imageURL={item.imageURL}
        imageAlt={item.imageAlt}
        basePrice={item.basePrice}
        priceFormatter={this.priceFormatter}
      />
    );
    return (
      <div className="homepage">
        <header>
          <img id="logo" src={logo} alt="Bun Bun Bake Shop logo with text" width="400" />
          <div id="header-text">
            <NavBar/>
            <hr/>
            <h1>Our hand-made cinnamon rolls</h1>
          </div>
        </header>
        <div id="product-grid">
          {gridItems}
        </div>
      </div>
    );
  }
}
 
export default Homepage;