import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import LogOut from './containers/Auth/logout/LogOut';
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/Auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to ='/' />
      </Switch>

    );
    
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/Auth" component={Auth} />
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/logout" component={LogOut} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to ='/' />
        </Switch>

      );
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }

}

const mapStatetoProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actionCreators.authCheckState())
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(App));
