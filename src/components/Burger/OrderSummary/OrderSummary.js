import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
class OrderSummary extends Component {
  componentWillUpdate() {
    console.log(`[OrderSummary] will update!`)
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:
          {this.props.ingredients[ingKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your order</h3>
        <p>Ingredients added:</p>
        <ul>{ingredientSummary}</ul>
        <div>
          <strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong>
        </div>
        <p>Continue to Checkout ?</p>
      </Aux>
    );
  }
};

export default OrderSummary;
