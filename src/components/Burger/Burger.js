import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = props => {
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="patty" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
