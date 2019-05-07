import * as actionTypes from './actionTypes';
import axiosInstance from "../../axios-orders";

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}
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

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

// Async
export const attemptPurchaseBurger = (orderData) => {
    // redux-thunk middleware in action, here.
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axiosInstance.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailed())
            });
    }
};