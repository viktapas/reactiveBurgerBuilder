import * as actionTypes from './actionTypes';
import axiosInstance from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderID: id,
        orderData: orderData
    }
};
export const purchaseBurgerFailed = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED
    }
};

// Async
export const attemptPurchaseBurger = (orderData) => {
    // redux-thunk middleware in action, here.
    return dispatch => {
        axiosInstance.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailed())
            });
    }
};