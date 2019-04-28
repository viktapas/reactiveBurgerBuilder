import React, { Component } from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  componentWillUpdate() {
    console.log(`[Modal] will update!`);
  }
  render() {
    let actioButtons = <Aux>
      <Button btnType="danger" clicked={this.props.closeModal}>
        CANCEL
        </Button>
      <Button btnType="success" clicked={this.props.continuePurchase}>
        CONTINUE
        </Button>
    </Aux>;
    if (this.props.loading) {
      actioButtons = '';
    }
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.closeModal} />
        <div
          className={styles.modal}
          style={{
            transform: this.props.show
              ? 'translate(-50%, -50% )'
              : 'translate(-50%, -100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
          {actioButtons}
        </div>
      </Aux>
    );
  }
};

export default Modal;
