import React from 'react';
import styled from 'styled-components';
import './Backdrop.css';

const styles = {
    styledBackdrop : {
            position: 'fixed',
            zIndex: '100',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            '&.backdropOpen' : {
                display: 'block'
            },
            '&.backdropClosed' : {
                display: 'none'
            }
    }
}

const StyledBackdrop = styled('div')(styles.styledBackdrop);

const backdrop = (props) => (
    <StyledBackdrop className={props.show ? 'backdropOpen' : 'backdropClosed'}></StyledBackdrop>
);

export default backdrop;