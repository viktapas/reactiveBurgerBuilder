import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            patty: 1
        }
    }
    render() {
        return (
            <CheckoutSummary ingredients={this.state.ingredients} />
        );
    }
}

export default Checkout;