import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Navbar from '../view/component/Navbar'
import Cart from '../view/page/Cart'
import Home from '../view/page/Home'
import styles from '../view/Styles.less'

export const Routes = () => {
    return (
        <BrowserRouter>
            <div className={styles.App}>
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
    )
}

export default Routes