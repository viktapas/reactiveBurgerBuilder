import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = props => (
  <div className={styles.buildControl}>
    <div className={styles.label}>{props.label}</div>
    <button className={styles.less}>Less</button>
    <button className={styles.more}>More</button>
  </div>
);

export default buildControl;
