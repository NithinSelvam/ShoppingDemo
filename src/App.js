import React from 'react'
import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux'
import store from './model/Store';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Routes />
        </Provider>
      </React.Fragment>
    )
  }
}

export default App;
