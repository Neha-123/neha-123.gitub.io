import React from 'react';
import styled from 'styled-components';

import Transition from 'react-transition-group/Transition';

const styles = {
    styledmodal: {
        position: 'fixed',
        zIndex: '200',
        border: '1px solid #eee',
        boxShadow: '0 2px 2px #ccc',
        backgroundColor: 'white',
        padding: '10px',
        textAlign: 'center',
        boxSizing: 'border-box',
        top: '30%',
        left: '25%',
        width: '50%',
        transition: 'all 0.3s ease-out',
        '&.modalClosed': {
            animation: 'closeModal 1s ease-out forwards'
        },
        '&.modalOpen': {
            animation: 'openModal 0.4s ease-out forwards'
        },
        '@keyframes openModal': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-100%)'
            },
            '50%': {
                opacity: '1',
                transform: 'translateY(90%)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            }
        },
        '@keyframes closeModal': {
            '0%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
            '50%': {
                opacity: '0.8',
                transform: 'translateY(60%)'
            },
            '100%': {
                opacity: '0',
                transform: 'translateY(-100%)'
            }
        }
    }

}

const Styledmodal = styled('div')(styles.styledmodal);
const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {
    return (
        <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit >
            {state => {
                return (
                    <Styledmodal className={state === 'entering'
                        ? 'modalOpen'
                        : state === 'exiting'
                            ? 'modalClosed'
                            : null}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </Styledmodal>
                )
            }}
        </Transition>

    )
};

export default modal;