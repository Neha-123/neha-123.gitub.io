import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
// import { render } from '@testing-library/react';


class Persons extends Component { 
        

        componentDidMount() {
                console.log('[Persons.js] componentDidMount');
        }

        shouldComponentUpdate (nextProps, nextState) { // works only for class based components
                console.log('[Persons.js] shouldComponentUpdate');
                if(nextProps.persons !== this.props.persons)
                {
                        return true;
                }
                else{
                        return false;
                }
        }

        componentDidUpdate (prevProps, prevState, snapshot) {
                console.log('[Persons.js] componentDidUpdate');
                console.log(snapshot);
        }

        componentWillUnmount () {
                console.log('[Persons.js] componentWillUnmount');
        }


        render() {
                console.log('[Persons.js] Rendering....');
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
