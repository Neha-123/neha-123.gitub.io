import React from 'react';
import styled from 'styled-components';

const NavigationItem = (props) => {

    const StyledList = styled.li`
        margin: 10px 0;
        box-sizing: border-box;
        display: block;
        width: 100%;
        
        @media (min-width: 500px) {
            margin: 0;
            display: flex;
            height: 100%;
            width: auto;
            align-items: center;
        }
    `
    const StyledLink = styled.a`
        color: #8F5C2C;
        text-decoration: none;
        width: 100%;
        display: block;
        box-sizing: border-box;
        &:hover {
            color: #40A4C8;
        }
        &:active {
            color: #40A4C8;
        }
        @media (min-width: 500px) {
            color: white;
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
            &:hover {
                background-color: #8F5C2C;
                border-bottom: 4px solid #40A4C8;
                color: white;
            }
            &:active {
                background-color: #8F5C2C;
                border-bottom: 4px solid #40A4C8;
                color: white;
            }
        }
    `
    const Active = styled(StyledLink)`
        color: #40A4C8;
        @media (min-width: 500px) {
            background-color: #8F5C2C;
            border-bottom: 4px solid #40A4C8;
            color: white;
        }
    `
    const MyLink = (props.active) ? Active : StyledLink;

    return (
        <StyledList>
            <MyLink href={props.link}>{props.children}</MyLink>
        </StyledList>
    )
}

export default NavigationItem;