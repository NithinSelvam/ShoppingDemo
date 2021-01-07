import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../Styles.less'

 const Navbar = ()=>{
    return(
            <nav className={styles.navWrapper}>
                <div className={styles.container}>
                    <Link to="/" className={styles.brandLogo}>Shopping</Link>
                    
                    <ul className={styles.right}>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className={styles.materialIcons}>shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;