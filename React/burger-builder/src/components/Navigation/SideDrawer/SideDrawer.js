import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {

    const SideDrawer = styled.div`
        position: fixed;
        width: 280px;
        max-width: 70%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 200;
        background-color: white;
        padding: 32px 16px;
        box-sizing: border-box;
        transition: transform 0.3s ease-out;
        @media (min-width: 500px) {
            display: none;
        }
    `
    const openDrawer = styled(SideDrawer)`
        transform: translateX(0);
    `

    const closeDrawer = styled(SideDrawer)`
        transform: translateX(-100%);
    `
    const MySideDrawer = (props.open) ? openDrawer : closeDrawer;

    return (
        <Auxiliary>
            <BackDrop show= {props.open} clicked = {props.close} />
            <MySideDrawer>
                <Logo height = "11%" />
                <NavigationItems />
            </MySideDrawer>
        </Auxiliary>
        
    )
}

export default sideDrawer;