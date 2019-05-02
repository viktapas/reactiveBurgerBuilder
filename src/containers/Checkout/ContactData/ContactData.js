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
                value: '',
                validation: {
                    required: true,
                    isValid: false,
                    touched: false
                }
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    name: 'email',
                    type: 'input',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isValid: false,
                    touched: false
                }
            },
            street: {
                elementType: 'textarea',
                elementConfig: {
                    name: 'street',
                    type: 'textarea',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true,
                    isValid: false,
                    touched: false
                }
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    name: 'city',
                    type: 'input',
                    placeholder: 'City'
                },
                value: '',
                validation: {
                    required: true,
                    isValid: false,
                    touched: false
                }
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    name: 'zip',
                    type: 'input',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    isValid: false,
                    minLength: 3,
                    maxLength: 5,
                    touched: false
                }
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    name: 'country',
                    type: 'input',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                    isValid: false,
                    touched: false
                }
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
                validation: {
                    isValid: false,
                    touched: false
                },
                value: ''
            }

        },
        isFormValid: false,
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElIdentifier in this.state.orderForm) {
            formData[formElIdentifier] = this.state.orderForm[formElIdentifier].value;
        }
        const orderData = {
            ingredients: this.props.ingredients,
            price: this.props.price.toFixed(2),
            orderData: formData
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
    inputChangedHandler = (event, elementIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[elementIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedOrderForm[elementIdentifier] = updatedFormElement;
        updatedFormElement.validation.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.validation.touched = true;
        let isFormValid = true;
        for (let elementIdentifier in updatedOrderForm) {
            isFormValid = updatedOrderForm[elementIdentifier].validation.isValid && isFormValid;
        }
        this.setState({ orderForm: updatedOrderForm, isFormValid: isFormValid });
        console.log(this.state.isFormValid);
    }
    checkValidity(value, rules) {
        let valid = true;
        if (rules.required) {
            valid = value.trim() !== '' && valid;
        }
        if (rules.minLength) {
            valid = value.length >= rules.minLength && valid;
        }
        if (rules.maxLength) {
            valid = value.length <= rules.maxLength && valid;
        }
        return valid;
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
                        invalid={!formElement.config.validation.isValid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.validation.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                )}
                <Button btnType="success" clicked={this.orderHandler}
                    disabled={!this.state.isFormValid}>ORDER NOW</Button>
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