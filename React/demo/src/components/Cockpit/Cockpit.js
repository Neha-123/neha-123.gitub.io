import React, { useEffect } from 'react';
import  './Cockpit.css';
import styled from 'styled-components';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request...
        setTimeout(
            () => {
                alert('Saved Data to Cloud')
            }, 1000
        );
        //works as summation of didMount and didupdate work in class component
    }, [props.persons]); //useEffect will work only when persons is changed which is given in the second argument
                        //else it will rerun everytime a dependency is changed. If there are no dependency it will run only once i.e in the beginning
    
    
    
    const StyledButton = styled.button`
        background-color: ${prop => prop.alt ? 'red' : 'green'} ;
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
        &:hover {
            background-color: ${prop => prop.alt ? 'salmon' : 'lightgreen'};
            color: black;
        }
    `

    const assignedclasses = [];
    if(props.persons.length <= 2)
    {
        assignedclasses.push('red');
    }
    if(props.persons.length <= 1)
    {
        assignedclasses.push('bold');
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p className= {assignedclasses.join(' ')}>This is really Working!!!</p>
            <StyledButton alt={props.showpersons}  onClick = {props.click} >
                Toggle Persons
            </StyledButton>
        </div>
    );
}

export default Cockpit;