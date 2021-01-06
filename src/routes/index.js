import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '../view/component/Header'
import LandingPage from '../view/page/LandingPage'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/header'} component={Header} />
                <Route component={LandingPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes