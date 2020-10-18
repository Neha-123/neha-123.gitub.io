import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import * as actionCreators from '../store/actions/index';


const styles = {
    basket: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

const Basket = styled('div')(styles.basket);
class ShoppingBasket extends Component {

componentDidMount = () => {
    this.props.onfetchBasketProduct(this.props.token);
    
}

    render() {
        let basketItem = 0;
        const basketItemQuantity = this.props.basket.map(elm => {
            return elm.quantity;
        });
        if(basketItemQuantity.length>0 && this.props.isAuthenticated) {
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
        basket: state.productReducer.basket,
        token: state.customerReducer.token,
        isAuthenticated: state.customerReducer.token !== null
    }

}

const mapDispatchtoProps = dispatch => {
    return {
        onfetchBasketProduct: (token) => dispatch(actionCreators.fetchBasketProduct(token))
       
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(ShoppingBasket);
