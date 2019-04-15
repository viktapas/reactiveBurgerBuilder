import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Patty', type: 'patty' }
];

const buildControls = props => (
  <div className={styles.buildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={styles.orderButton} disabled={!props.purchasable}>
      Order Now
    </button>
  </div>
);

export default buildControls;
