import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import { Route, Switch } from "react-router-dom";
import Checkout from './Checkout/Checkout';
import NewUserSignIn from './login/NewUserSignIn';
import HomePage from './homepage/HomePage';
import LogOut from './logout/LogOut';
import CreateAccount from './login/CreateAccount';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Navigation />
          <Checkout />
        </Route>
        <Route path="/login">
          <NewUserSignIn />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
        <Route path="/logOut">
          <LogOut />
        </Route>
        <Route path="/">
          <Navigation />
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
