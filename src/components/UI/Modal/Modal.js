import React from 'react';
import styles from './Modal.module.css';

const modal = props => (
  <div
    className={styles.modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vw)',
      opacity: props.show ? '1' : '0'
    }}
  >
    {props.children}
  </div>
);

export default modal;
