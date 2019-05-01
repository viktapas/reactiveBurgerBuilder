import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axiosInstance from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axiosInstance.get('/orders.json')
            .then(res => {
                const fetchedData = [];
                for (let key in res.data) {
                    fetchedData.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ orders: fetchedData });
                console.log(this.state.orders);

            })
            .catch(err => console.log(err));

    }
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axiosInstance);