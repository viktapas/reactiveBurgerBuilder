import React, { Component } from 'react';

import "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import axiosInstance from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    name: 'text',
                    type: 'input',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    name: 'email',
                    type: 'input',
                    placeholder: 'Email'
                },
                value: ''
            },
            street: {
                elementType: 'textarea',
                elementConfig: {
                    name: 'street',
                    type: 'textarea',
                    placeholder: 'Street'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    name: 'city',
                    type: 'input',
                    placeholder: 'City'
                },
                value: ''
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    name: 'zip',
                    type: 'input',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    name: 'country',
                    type: 'input',
                    placeholder: 'Country'
                },
                value: ''
            },
            deliveryMode: {
                elementType: 'select',
                elementConfig: {
                    name: 'delivery',
                    type: 'select',
                    options: [{
                        valueName: 'Fastest',
                        value: 'fastest'
                    },
                    {
                        valueName: 'Cheapest',
                        value: 'cheapest'
                    }]
                },
                value: ''
            }

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
                name: this.state.name,
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
    };
    inputChangedHandler = (event) => {
        console.log(event.target);
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push(
                { id: key, config: this.state.orderForm[key] }
            );
        }
        let form = (
            <form>
                {formElementsArray.map(formElement =>
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        name={formElement.config.elementName}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={this.inputChangedHandler}
                    />
                )}
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