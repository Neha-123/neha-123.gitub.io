import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Menu/Menu';
//import Auxiliary from '../../../hoc/Auxiliary';

const toolbar = (props) => {

    const StyledToolbar = styled.div`
        height: 56px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #703B09;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 90;
    `
    const StyledNav = styled.div`
        height: 100%;
        @media (max-width: 499px) {
            display: none;
        }
    `

    return(
        <StyledToolbar>
            <Menu clicked={props.MenuClicked} />
            <Logo height = "80%"/>
            <StyledNav>
                <NavigationItems isAunthenticated = {props.isAunthenticated} />
            </StyledNav>
        </StyledToolbar>
    )
}

export default toolbar;