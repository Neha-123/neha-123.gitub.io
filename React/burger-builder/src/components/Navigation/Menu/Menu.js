import React from 'react';
import styled from 'styled-components';
import  Logo from '../../../assets/Images/logo.png';

const menu = (props) => {

    const DrawerToggle = styled.div`
        width: 40px;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0;
        box-sizing: border-box;
        cursor: pointer;
        @media (min-width: 500px) {
            display: none;
        }
    `
    const StyledDiv = styled.div`
        width: 90%;
        height: 3px;
        background-color: white;
    `

    return (
        <DrawerToggle src={Logo} alt="Menu" onClick={props.clicked}>
            <StyledDiv></StyledDiv>
            <StyledDiv></StyledDiv>
            <StyledDiv></StyledDiv>
        </DrawerToggle>

    )
}

export default menu;