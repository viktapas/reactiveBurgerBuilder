import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axiosInstance from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import styles from "./Orders.module.css";
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
                <div className={styles.title}><h1>Orders</h1></div>
                {this.state.orders.map(order => <Order key={order.id} ingredients={order.ingredients} price={order.price} />)}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axiosInstance);