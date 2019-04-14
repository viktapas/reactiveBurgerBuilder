import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
const layout = props => (
  <Aux>
    <div>Header, sidenav, backdrop</div>
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default layout;
