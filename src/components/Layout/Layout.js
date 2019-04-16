import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navingation/Toolbar/Toolbar';
import SideDrawer from '../Navingation/SideDrawer/SideDrawer';
const layout = props => (
  <Aux>
    <SideDrawer />
    <Toolbar />
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default layout;
