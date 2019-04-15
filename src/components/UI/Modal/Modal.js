import React from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.closeModal} />
    <div
      className={styles.modal}
      style={{
        transform: props.show
          ? 'translate(-50%, -50% )'
          : 'translate(-50%, -100vw)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
      <Button btnType="danger" clicked={props.closeModal}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.continuePurchase}>
        CONTINUE
      </Button>
    </div>
  </Aux>
);

export default modal;
