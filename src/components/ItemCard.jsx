import React, { Component } from 'react';
import './ItemCard.css';

/*
  ItemCard props are: 
  name: String,
  displayName: String,
  imageURL: String,
  imageAlt: String,
  price: number,
*/
class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return (
      <article className="product-card">
        <img className="product" src={process.env.PUBLIC_URL + this.props.imageURL} alt={this.props.imageAlt} width="280"/>
        <h3>{this.props.displayName}</h3>

          <form>
            <div className="row-glazing">
              <span>Glazing:</span>
              <select className="select-glaze" name="glaze">
                <option value="original">Keep original</option>
                <option value="sugar">Sugar milk</option>
                <option value="vanilla">Vanilla milk</option>
                <option value="chocolate">Double chocolate</option>
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
            <span id="price">$ {this.props.price}</span>
            <button>Add to Cart</button>
          </div>
      </article>
    );
  }
}
 
export default ItemCard;