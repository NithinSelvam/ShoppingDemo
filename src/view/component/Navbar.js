import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../Styles.less'
import { CartIcon, MenuIcon } from './icons';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <table>
                    <tr>
                        <th><span className={styles.menu}><Link to="/menu"><MenuIcon /></Link></span></th>
                        <th><span className={styles.brandLogo}><Link to="/">Shopping</Link></span></th>
                        <th><span className={styles.cart}><Link to="/cart"><CartIcon /><span id='lblCartCount' className={styles.cartCount}>0</span> <br />My  Cart</Link></span></th>
                    </tr>
                </table>
            </div>
        </nav>


    )
}

export default Navbar;