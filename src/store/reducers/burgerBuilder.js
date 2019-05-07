import * as actionTypes from "../actions/actionTypes";


const initialState = {
    ingredients: {
        salad: 0,
        patty: 0,
        cheese: 0
    },
    totalPrice: 25
};

const INGREDIENT_PRICES = {
    salad: 15.56,
    cheese: 10.64,
    patty: 25.32
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }

}

export default reducer;