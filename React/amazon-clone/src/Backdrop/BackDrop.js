import React from 'react'
import styled from 'styled-components';
import { device } from '../mediaQueries/device';

const styles = {
    backdrop : {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor : '#EAEDED',
        width: "110%",
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '-1000',
        // [device.mobileL]: {
        // width: "100%",
        // },
        // [device.mobileM]: {
        //     width: "160%",
        // },
         [device.mobileS]: {
            width: "205%",
        },
        [device.tablet]: {
            width: "100%",
        },
        [device.laptop]: {
            width: "100%",
        },
        // [device.laptopL]: {
        //     width: "100%",
        // },
        // [device.desktop]: {
        //     width: "100%",
        // },
        // [device.desktopL]: {
        //     width: "100%",
        // },
    }
}

const Backdrop = styled('div')(styles.backdrop);

const BackDrop = (props) => {
    return (
        <Backdrop>
            {props.children}
        </Backdrop>
    )
}

export default BackDrop
