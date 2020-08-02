import React, { Component } from 'react';
import "./List.css";
import styled from 'styled-components';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

const styles = {
    styledUl : {
            listStyle: 'none',
            margin: '0 auto',
            padding: '0',
            width: '280px'
        },
    styledli : {
            margin: '0',
            padding: '10px',
            boxSizing: 'border-box',
            width: '100%',
            border: '1px solid #521751',
            backgroundColor: 'white',
            textAlign: 'center',
            cursor: 'pointer',
            '&:hover' : {
                backgroundColor: '#ccc'
            },
            '&:active' : {
                backgroundColor: '#ccc'
            },
            '&.fade-enter' : {
                opacity:'0'
            },
            '&.fade-enter-active' : {
                opacity:'1',
                transition:'opacity 0.3s ease-out'
            },
            '&.fade-exit' : {
                opacity:'1',
            },
            '&.fade-exit-active' : {
                opacity:'0',
                transition:'opacity 0.3s ease-out'
            }
        }
        
}

const StyledUl = styled('ul')(styles.styledUl);
const Styledli = styled('li')(styles.styledli);




class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            <CSSTransition
            key={index}
            timeout={300}
            classNames='fade' >
                <Styledli
                onClick={() => this.removeItemHandler(index)}>{item}</Styledli>
            </CSSTransition>
            
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <StyledUl>
                    <TransitionGroup>
                        {listItems}
                    </TransitionGroup>
                </StyledUl>
            </div>
        );
    }
}

export default List;