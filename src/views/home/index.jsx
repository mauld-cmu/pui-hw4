import React, { Component } from 'react';
import './Homepage.css';
import logo from './logo-01.svg';
import NavBar from '../../components/NavBar';
import ItemCard from '../../components/ItemCard';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCardData: [
        {
          name: "original",
          displayName: "Original cinnamon roll",
          imageURL: "/assets/original-cinnamon-roll.jpg",
          imageAlt: "Photo of original flavor cinnamon roll",
          price: 2.49,
        },
        {
          name: "apple",
          displayName: "Apple cinnamon roll",
          imageURL: "/assets/apple-cinnamon-roll.jpg",
          imageAlt: "Photo of apple flavored cinnamon roll",
          price: 3.49,
        },
        {
          name: "raisin",
          displayName: "Raisin cinnamon roll",
          imageURL: "/assets/raisin-cinnamon-roll.jpg",
          imageAlt: "Photo of raisin flavored cinnamon roll",
          price: 2.99,
        },
        {
          name: "walnut",
          displayName: "Walnut cinnamon roll",
          imageURL: "/assets/walnut-cinnamon-roll.jpg",
          imageAlt: "Photo of walnut flavored cinnamon roll",
          price: 3.49,
        },
        {
          name: "chocolate",
          displayName: "Double-chocolate cinnamon roll",
          imageURL: "/assets/double-chocolate-cinnamon-roll.jpg",
          imageAlt: "Photo of double chocolate flavored cinnamon roll",
          price: 3.99,
        },
        {
          name: "strawberry",
          displayName: "Strawberry cinnamon roll",
          imageURL: "/assets/strawberry-cinnamon-roll.jpg",
          imageAlt: "Photo of Strawberry flavored cinnamon roll",
          price: 3.99,
        }
      ]
    };
  }
  render() { 
    // Loops through the itemCardData list, passes props to ItemCard Components
    const gridItems = this.state.itemCardData.map((item) =>
      <ItemCard
        key={item.name}
        displayName={item.displayName}
        imageURL={item.imageURL}
        imageAlt={item.imageAlt}
        price={item.price}
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