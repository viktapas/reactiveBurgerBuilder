import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navingation/Toolbar/Toolbar';
const layout = props => (
  <Aux>
    <Toolbar />
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default layout;
