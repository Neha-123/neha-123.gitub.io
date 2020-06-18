import React from 'react';
import styled from 'styled-components';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    const StyledList = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
        margin-top: 32px;
        @media (min-width: 500px) {
            flex-flow: row;
            margin-top: 0;
        }
    `

    return(
        <StyledList>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </StyledList>
    )
}

export default NavigationItems;