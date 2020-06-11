import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import { render } from '@testing-library/react';

class Persons extends Component { 

        componentDidMount() {
                console.log('[Persons.js] componentDidMount');
        }

        componentDidUpdate () {
                console.log('[Persons.js] componentDidUpdate');
        }

        componentWillUnmount () {
                console.log('[Persons.js] componentWillUnmount');
        }


        render() {
                return  this.props.persons.map((person, index) => {
                        return(
                                <ErrorBoundary key={person.id}>
                                <Person 
                                click={() => this.props.clicked(index)} 
                                change={(event) => this.props.changed(event, person.id)} 
                                name={person.name} 
                                age={person.age} />
                                </ErrorBoundary>
                        );
                        
                });
        }             
}


export default Persons;
