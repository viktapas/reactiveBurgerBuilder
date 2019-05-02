import React from 'react';
import styles from './Button.module.css';
const button = props => {
  let button = (
    <button
      className={[styles.button, styles[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
  if (props.disabled) {
    button = (<div className={[styles.button, styles.disabled, styles[props.btnType]].join(' ')}>{props.children}</div>);
  }
  return button
};
export default button;
