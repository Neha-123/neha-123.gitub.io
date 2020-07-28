import React, { useState, useEffect } from 'react';
import db from './firebase';
import styled from 'styled-components';
import Header from './Dashboard/Header';
import TodoDashBoard from './Dashboard/TodoDashBoard';
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import HomePage from './HomePage/Homepage';


const styles = {
  appDivStyle: {
    backgroundColor: '#d4ccff',
    width:'100%',
    margin: '0',
    padding: '0',
    height:'100%',
    position:'fixed',
    justifyContent : 'center'
  }
}

const AppDivStyle = styled("div")(styles.appDivStyle);

let routes = (
  <Switch>
    <Route path="/home" component={HomePage} />
    <Route path="/dashboard" component={TodoDashBoard} />
    <Route path="/" exact component={HomePage} />
    <Redirect to ='/' />
  </Switch>
)


function App() {

  return (
    <AppDivStyle>
      <Header>{routes}</Header>
    </AppDivStyle>
  );
}

export default App;

