import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => (
    <div className={styles.checkoutSummary}>
        <h1>Your tasty Burger !</h1>
        <div style={{ width: '100%', margin: 'auto' }}>
            <Burger ingredients={props.ingredients} />
        </div>
        <div>
            <Button btnType="danger" clicked={props.checkoutCanceled}>CANCEL</Button>
            <Button btnType="success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    </div>
)

export default CheckoutSummary;