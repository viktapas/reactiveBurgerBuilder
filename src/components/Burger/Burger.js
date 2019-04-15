import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, index) => {
        return <BurgerIngredient key={ingKey + index} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients!</p>;
  }
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
