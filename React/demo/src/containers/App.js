import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import './App.css';



class App extends Component {
  state = {
    persons : [
      { id:1,  name : 'Max', age : 28 },
      { id:2,  name : 'Manu', age : 27 },
      { id:3,  name : 'Stephanie', age : 26 }
    ],
    showPersons: false,
    showCockpit : true
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

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] Rendering...')
    let fpersons = null;

    if ( this.state.showPersons ){
      fpersons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
       
    }

    return (
      
        <div className="App">
          <button onClick = {() => {this.setState({showCockpit : false })} }>Remove Cockpit</button>
          { this.state.showCockpit ? 
            <Cockpit title = {this.props.apptitle} 
            showpersons = {this.state.showPersons} 
            personsLength = {this.state.persons.length} 
            click = {this.togglePersonHandler}/>
             : null
          }
          {fpersons}  
        </div>
     
    );
  }
}

// export default Radium(App);
export default App;
