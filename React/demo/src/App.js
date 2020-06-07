import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

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

    // this.setState({
    //   persons : [
    //     { name : 'Max', age : 28 },
    //     { name : event.target.value, age : 27 },
    //     { name : 'Stephanie', age : 30 }
    //   ]
    // })
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
    const Style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let fpersons = null;

    if ( this.state.showPersons ){
      fpersons = (
        <div>
          { this.state.persons.map((person, index) => {
            console.log('index',index);
              return <Person 
                        click = {() => this.deletePersonHandler(index)}
                        change = {(event) => this.nameChangedHandler(event, person.id)}
                        name = {person.name}
                        age = {person.age} 
                        key = {person.id} />
            })
          }
        </div>
      ) 
    }
       

          // <Person 
          //   name = {this.state.persons[0].name} 
          //   age = {this.state.persons[0].age} />
          // <Person
          //   name = {this.state.persons[1].name} 
          //   age = {this.state.persons[1].age} 
          //   click = {this.switchNameHandler.bind(this, 'Max!!!')} 
          //   change = {this.nameChangedHandler} />
          // <Person 
          //   name = {this.state.persons[2].name} 
          //   age = {this.state.persons[2].age} />
       

    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <button 
          style = {Style}
          // onClick = {this.switchNameHandler.bind(this, 'Neha')} >Switch Name</button>
          onClick = {this.togglePersonHandler} >Toggle Persons</button>
          {fpersons}
        {
          // this.state.showPersons === true ?
          //   <div>
          //     <Person 
          //       name = {this.state.persons[0].name} 
          //       age = {this.state.persons[0].age} />
          //     <Person
          //       name = {this.state.persons[1].name} 
          //       age = {this.state.persons[1].age} 
          //       click = {this.switchNameHandler.bind(this, 'Max!!!')} 
          //       change = {this.nameChangedHandler} />
          //     <Person 
          //       name = {this.state.persons[2].name} 
          //       age = {this.state.persons[2].age} />
          //   </div> : null
        }
      </div>
    );
  }
}

export default App;
