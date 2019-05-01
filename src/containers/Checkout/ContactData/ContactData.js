import React, { Component } from 'react';

import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";

class ContactData extends Component {
    state = {
        username: '',
        email: '',
        address: {
            street: '',
            zipcode: '',
            state: ''
        }
    }
    render() {
        return (
            <div className="contactData">
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="number" name="zipcode" placeholder="Zipcode" />
                    <Button btnType="success">ORDER NOW</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;