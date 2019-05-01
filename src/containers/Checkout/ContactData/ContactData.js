import React, { Component } from 'react';

import "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import axiosInstance from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        username: 'tester',
        email: 'tester@tester.com',
        address: {
            street: '123',
            city: 'Nalanda',
            zip: '46345',
            state: 'Bihar',
            country: 'Bharat'
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);

        this.setState({ loading: true });
        const orderData = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.username,
                address: {
                    street: this.state.address.street,
                    city: this.state.address.city,
                    state: this.state.address.state,
                    zip: this.state.address.zip,
                    country: this.state.address.country
                }
            },
            deliveryMode: 'fastest'
        }
        axiosInstance.post('/orders.json', orderData)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }
    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="street" placeholder="Street" />
                <input type="number" name="zip" placeholder="Zip" />
                <Button btnType="success" clicked={this.orderHandler}>ORDER NOW</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className="contactData">
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;