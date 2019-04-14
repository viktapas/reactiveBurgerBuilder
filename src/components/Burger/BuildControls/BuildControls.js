import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Paddy', type: 'paddy' }
];

const buildControls = props => (
  <div className={styles.buildControls}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default buildControls;
