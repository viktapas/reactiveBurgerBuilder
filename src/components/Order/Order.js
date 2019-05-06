import React from "react";
import styles from './Order.module.css';

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
            key={ing.name}
            style={{
                display: 'inline-block',
                padding: '5px',
                margin: '0 5px',
                border: '1px solid #eee',
                textTransform: 'capitalize',
                backgroundColor: '#eee'
            }}>
            {ing.name} ({ing.amount})
        </span>));

    const price = +props.price;

    return (<div className={styles.order}>
        <p>Ingredients: {ingredientsOutput}</p>
        <p>Price: <strong>INR {price.toFixed(2)}</strong></p>
    </div>)
};

export default Order;