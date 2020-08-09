import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';


const styles = {
    basket: {
        display: 'flex',
        justifyContent : 'space-between'
    }
}

const Basket = styled('div')(styles.basket);
class ShoppingBasket extends Component {
    render() {
        return (
            <Basket>
                <ShoppingBasketRoundedIcon />
                <span>{this.props.basket.length}</span>
            </Basket>  
        )
    }
}

const mapStatetoProps = state => {
    return {
        basket : state.basket
    }

}

export default connect(mapStatetoProps)(ShoppingBasket);
