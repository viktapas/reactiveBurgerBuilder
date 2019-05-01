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
                elementName: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementName: 'email',
                elementConfig: {
                    type: 'input',
                    placeholder: 'Email'
                },
                value: ''
            },
            street: {
                elementName: 'street',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Street'
                },
                value: ''
            },
            city: {
                elementName: 'city',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: ''
            },
            zip: {
                elementName: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementName: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            deliveryMode: {
                elementName: 'delivery',
                elementConfig: {
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
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push(
                { id: key, config: this.state.orderForm[key] }
            );
        }
        console.log(formElementsArray);
        let form = (
            <form>
                {formElementsArray.map(formElement =>
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementConfig.type}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
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