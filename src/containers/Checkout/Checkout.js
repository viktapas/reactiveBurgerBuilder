import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            patty: 1
        }
    }
    componentDidMount() {
        console.log('props', this.props);
        const query = new URLSearchParams(this.props.location.search);
        console.log('query', query);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +ingredients[param[1]];
        }
        console.log('ingredients', ingredients);
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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        );
    }
}

export default Checkout;