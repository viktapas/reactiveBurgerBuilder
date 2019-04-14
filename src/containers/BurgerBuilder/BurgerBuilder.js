import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      cheese: 2,
      patty: 1
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
