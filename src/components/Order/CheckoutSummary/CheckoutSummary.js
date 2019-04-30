import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => (
    <div className={styles.checkoutSummary}>
        <h1>Your tasty Burger !</h1>
        <div style={{ widht: '100%', margin: 'auto' }}>
            <Burger ingredients={props.ingredients} />
        </div>
        <div>
            <Button btnType="danger" clicked>CANCEL</Button>
            <Button btnType="success" clicked>CONTINUE</Button>
        </div>
    </div>
)

export default CheckoutSummary;