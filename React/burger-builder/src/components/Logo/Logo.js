import React from 'react';
import styled from 'styled-components';
import BurgerLogo from '../../assets/Images/logo.png';

const logo = (props) => {

    const Styleddiv = styled.div`
        background-color: white;
        padding: 8px;
        height:100%;
        box-sizing: border-box;
        border-radius: 5px;
    `
    const StyledImage = styled.img`
        height: 100%;
    `

    return (
        <Styleddiv style={{height: props.height}} >
            <StyledImage src={BurgerLogo} />
        </Styleddiv>
    )
}

export default logo;