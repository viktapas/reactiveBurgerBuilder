import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={styles.breadBottom} />;
        break;
      case 'bread-top':
        ingredient = (
          <div className={styles.breadTop}>
            <div className={styles.seeds1} />
            <div className={styles.seeds2} />
          </div>
        );
        break;
      case 'patty':
        ingredient = <div className={styles.patty} />;
        break;
      case 'cheese':
        ingredient = <div className={styles.cheese} />;
        break;
      case 'salad':
        ingredient = <div className={styles.salad} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

// set type to props of BurgerIngredient
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
