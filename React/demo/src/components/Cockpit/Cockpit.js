import React, { useEffect, useRef } from 'react';
import  './Cockpit.css';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';
import PropTypes from 'prop-types';

const Cockpit = (props) => {

    // const toggleBtnRef = useRef(null);

    useEffect(() => {  //works as summation of didMount and didupdate work in class component
        console.log('[Cockpit.js] useEffect');

        //http request...
        setTimeout(
            () => {
                alert('Saved Data to Cloud')
            }, 1000);

      //  toggleBtnRef.current.click();
    return () => { console.log('[Cockpit.js] cleanup work in useEffect')} ; // if we return something here, it will run after the render(). it will run as componentUmount() function & can b used for cleanup work
    }, [] ); //else it will rerun everytime a dependency is changed. If there are no dependency it will run only once i.e in the beginning
    // [props.persons]); useEffect will work only when persons is changed which is given in the second argument
             
    useEffect (() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {('[Cockpit.js] cleanup work in 2nd useEffect')}
    })
                        
    
    
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
    if(props.personsLength <= 2)
    {
        assignedclasses.push('red');
    }
    if(props.personsLength <= 1)
    {
        assignedclasses.push('bold');
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p className= {assignedclasses.join(' ')}>This is really Working!!!</p>
            <StyledButton alt={props.showpersons}  onClick = {props.click} 
            //ref={ toggleBtnRef } 
            >
                Toggle Persons
            </StyledButton>
            <AuthContext.Consumer>
                {context => 
                    <StyledButton onClick = {context.login} >
                        Log In
                    </StyledButton>
                }
            </AuthContext.Consumer>
            
        </div>
    );
}

Cockpit.propTypes = {
	alt : PropTypes.bool
	
}

export default React.memo(Cockpit);