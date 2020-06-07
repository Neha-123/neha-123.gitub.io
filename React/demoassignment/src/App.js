import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {

state = {
  inputText :''
}

  changeTextLength = (event) => {
    this.setState({inputText: event.target.value});

  }

  deleteCharacter = (charIndex) =>{
    console.log('charIndex', charIndex);
    const chars = this.state.inputText.split('');
    chars.splice(charIndex, 1);
    const updatedText = chars.join('');
    this.setState({inputText: updatedText});
  }

  render() {

    const charlist = this.state.inputText.split('').map( (ch, index) => {
      return <Char character = {ch} key= {index} click = {() => this.deleteCharacter(index)} />
    });

      return (
      <div className="App">
        <input type = "text" onChange = { this.changeTextLength } value = {this.state.inputText} />
        <p>input Text: {this.state.inputText}</p>
        <Validation length = {this.state.inputText.length} />
        {charlist}
      </div>
    );
  } 
}

export default App;
