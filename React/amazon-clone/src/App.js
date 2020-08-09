import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import { Route, Switch, withRouter } from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Login from './login/Login';
import HomePage from './homepage/HomePage';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Switch>
        <Route path="/checkout">
          <Navigation >
            <Checkout />
          </Navigation>
        </Route>
        <Route path="/login">
          <Navigation >
            <Login />
          </Navigation>
        </Route>
        <Route path="/">
          <Navigation >
            <HomePage />
          </ Navigation>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
