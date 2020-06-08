import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'} ;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

class App extends Component {
  state = {
    persons : [
      { id:1,  name : 'Max', age : 28 },
      { id:2,  name : 'Manu', age : 27 },
      { id:3,  name : 'Stephanie', age : 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons : [
        { name : newName, age : 28 },
        { name : 'Manu', age : 27 },
        { name : 'Stephanie', age : 30 }
      ]
    })
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons});

    console.log('person', person);
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
    console.log('persons', this.state.persons);
  }

  render() {
    // const Style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let fpersons = null;

    if ( this.state.showPersons ){
      fpersons = (
        <div>
          { this.state.persons.map((person, index) => {
            console.log('index',index);
              return <ErrorBoundary key = {person.id} >
                        <Person 
                        click = {() => this.deletePersonHandler(index)}
                        change = {(event) => this.nameChangedHandler(event, person.id)}
                        name = {person.name}
                        age = {person.age} />
                      </ErrorBoundary>
            })
          }
        </div>
      )
      // Style.backgroundColor = 'red'; 
      // Style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('bold');
    }
       

    return (
      //<StyleRoot>
        <div className="App">
          <h1>Hi Im a React App</h1>
          <p className= {classes.join(' ')}>This is really Working!!!</p>
          <StyledButton alt={this.state.showPersons}  onClick = {this.togglePersonHandler} >
            Toggle Persons
          </StyledButton>
            {fpersons}
        </div>
     // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
