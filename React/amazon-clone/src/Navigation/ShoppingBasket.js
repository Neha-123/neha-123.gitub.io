import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';


const styles = {
    basket: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

const Basket = styled('div')(styles.basket);
class ShoppingBasket extends Component {



    render() {
        let basketItem = 0;
        const basketItemQuantity = this.props.basket.map(elm => {
            return elm.quantity;
        });
        if(basketItemQuantity.length>0) {
            basketItem = basketItemQuantity.reduce((total, num) => {
                return Number(total) + Number(num)
            }) 
        }

        return (
            <Basket>
                <ShoppingBasketRoundedIcon />
                <span>{basketItem}</span>
            </Basket>
        )
    }
}

const mapStatetoProps = state => {
    return {
        basket: state.basket
    }

}


export default connect(mapStatetoProps)(ShoppingBasket);
