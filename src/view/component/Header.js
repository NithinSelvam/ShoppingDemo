import React from 'react';
import { Link } from "react-router-dom";
import {CartIcon} from './icons';
import styles from './Header.less';

const Header = () => {

    console.log(styles)
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <div className={styles.storeCart}>
            <Link to='/cart'> <CartIcon/> Cart </Link>
            </div>
        </header>
     );
}

export default Header;