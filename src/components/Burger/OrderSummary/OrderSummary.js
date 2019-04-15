import React from 'react';
import Aux from '../../../hoc/Aux';
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:
        {props.ingredients[ingKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>Ingredients added:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout ?</p>
    </Aux>
  );
};
export default orderSummary;
