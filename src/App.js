import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LandingPage from '../src/view/page/LandingPage';
import './App.css';
import Header from './view/component/Header';

class App extends React.Component {
  render() {
    return (<React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path={'/header'} component={Header} />
          <Route component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>)
  }
}

export default App;
