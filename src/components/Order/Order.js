import React from "react";

const Order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientsOutput = ingredients.map(ing => (
        <span
            style={{
                display: 'inline-block',
                padding: '5px',
                margin: '0 5px',
                border: '1px solid #eee',
                textTransform: 'capitalize'
            }}>
            {ing.name} ({ing.amount})
        </span>));

    return (<div>
        <p>Ingredients: {ingredientsOutput}</p>
        <p>Price: <strong>INR {props.price.toFixed(2)}</strong></p>
    </div>)
};

export default Order;