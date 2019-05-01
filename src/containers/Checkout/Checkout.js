import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    state = {
        ingredients: {
            salad: null,
            cheese: null,
            patty: null
        }
    }
    componentDidMount() {
        console.log('props', this.props);
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = parseInt(param[1]);
        }
        this.setState({ ingredients: ingredients });
    }
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        // this.props.history.push('/checkout/contact-data');
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} render={() => (<ContactData ingredients={this.props.ingredients} />)} />
            </div>
        );
    }
}

export default Checkout;