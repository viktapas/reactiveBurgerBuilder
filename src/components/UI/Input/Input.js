import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
    var inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={styles.inputElement} onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={styles.inputElement} onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break;
        case ('select'):
            inputElement = (
                <select className={styles.inputElement} {...props.value} onChange={props.changed} value={props.value}>
                    {props.elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.valueName}</option>)}
                </select>
            );
            break;
        default:
            inputElement = <input className={styles.inputElement} {...props.elementConfig} />;
    }

    return (
        <div className={styles.input}>
            <label className={styles.label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;