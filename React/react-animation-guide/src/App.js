import React, { Component } from "react";

import "./App.css";
// import Modal from "./components/Modal/Modal";
import Modal from "./components/Modal/Modal2";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalDialog : false
  }
  modalClose = () => {
    this.setState({modalDialog:false})
  }
  modalOpen = () =>{
    this.setState({modalDialog:true})
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal closed={this.modalClose} show={this.state.modalDialog} />
        <Backdrop show={this.state.modalDialog} />
        <button className="Button" onClick={this.modalOpen}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
