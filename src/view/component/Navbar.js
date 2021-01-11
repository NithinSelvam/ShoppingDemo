import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from '../Styles.less'
import { CartIcon } from './icons';
import { InputText } from "primereact/inputtext";

const Navbar = ({ addedItems }) => {

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    <div className={styles.brandLogo}><Link to="/">Shopping</Link></div>
                    <div className={styles.menu}>Men</div>
                    <div className={styles.menu}>Woman</div>
                    <div className={styles.search}><InputText placeholder="Search" /></div>
                    <div>
                        <span className={styles.cartIcon}>
                            <Link to="/cart">
                                <div className={styles.cartCount}>
                                    <CartIcon />
                                    {addedItems.length}
                                </div>
                                <div>My  Cart</div>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </nav>


    )
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.cartItems.addedItems
    }
}

export default connect(mapStateToProps)(Navbar);