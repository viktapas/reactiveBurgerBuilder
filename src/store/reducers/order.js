import * as actionTypes from "../actions/actionTypes";

const initOrders = {
    orders: [],
    loading: false
}

const reducer = (state = initOrders, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderID
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder),
                loading: false
            }
        case actionTypes.PURCHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;