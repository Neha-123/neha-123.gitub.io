import React from 'react';
import styled from 'styled-components';

const backdrop = (props) => {

    const Styleddiv = styled.div`
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.5);
    `
    
    return(
        props.show ? <Styleddiv onClick= {props.clicked} ></Styleddiv> : null
    )
}

export default backdrop;