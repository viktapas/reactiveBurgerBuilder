import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
    var inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={styles.inputElement} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={styles.inputElement} {...props} />;
            break;
        default:
            inputElement = <input className={styles.inputElement} {...props} />;
    }

    return (
        <div className={styles.input}>
            <label className={styles.label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;