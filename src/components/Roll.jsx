import React, { Component } from 'react';
import './Roll.css';

const glazing = {
  "keepOriginal": {
    price: 0.00,
    displayName: "Keep original"
  },
  "sugarMilk": {
    price: 0.00,
    displayName: "Sugar milk"
  },
  "vanillaMilk": {
    price: 0.50,
    displayName: "Vanilla milk"
  },
  "doubleChocolate": {
    price: 1.50,
    displayName: "Double chocolate"
  }
}

const pack = {
  "onePack": {
    priceMultiplier: 1,
    displayNumber: 1
  },
  "threePack": {
    priceMultiplier: 3,
    displayNumber: 3
  },
  "sixPack": {
    priceMultiplier: 5,
    displayNumber: 6
  },
  "twelvePack": {
    priceMultiplier: 10,
    displayNumber: 12
  }
}

/*
  ItemCard props are: 
  name: String,
  displayName: String,
  imageURL: String,
  imageAlt: String,
  basePrice: number,
*/
class Roll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: this.props.priceFormatter(this.props.basePrice),
      currentGlazing: 'keepOriginal',
      currentPackSize: 1
    };
  }

  setPrice() {
    this.setState((state, props) => ({
      currentPrice: props.priceFormatter((props.basePrice + glazing[state.currentGlazing].price) * pack[state.currentPackSize].priceMultiplier)
    }));
  }

  pullFormData = (event) => {
    if (event.target.type === 'radio') {
      this.setState(prevState => ({
        ...prevState,
        currentPackSize: event.target.value
      }))
    }
    if (event.target.type === 'select-one') {
      this.setState(prevState => ({
        ...prevState,
        currentGlazing: event.target.value
      }))
    }
    this.setPrice();
  }

  render() { 
    return (
      <article className="product-card">
        <img className="product" src={process.env.PUBLIC_URL + this.props.imageURL} alt={this.props.imageAlt} width="280"/>
        <h3>{this.props.displayName}</h3>

        <form onChange={this.pullFormData}>
          <div className="row-glazing">
            <span>Glazing:</span>
            <select className="select-glaze" name="glaze">
              <option value="keepOriginal">Keep original</option>
              <option value="sugarMilk">Sugar milk</option>
              <option value="vanillaMilk">Vanilla milk</option>
              <option value="doubleChocolate">Double chocolate</option>
            </select>
          </div>

          <div className="row-pack">
            <span>Pack Size:</span>
            <div>
              <label>
                <input type="radio" value="onePack" name="pack" defaultChecked/>
                  <span>1</span>
              </label>
              <label>
                <input type="radio" value="threePack" name="pack"/>
                  <span>3</span>
              </label>
              <label>
                <input type="radio" value="sixPack" name="pack"/>
                  <span>6</span>
              </label>
              <label>
                <input type="radio" value="twelvePack" name="pack"/>
                  <span>12</span>
              </label>
            </div>
          </div>
        </form>

        <div className="row-cart">
          <span id="price">{this.state.currentPrice}</span>
          <button>Add to Cart</button>
        </div>
      </article>
    );
  }
}
 
export default Roll;