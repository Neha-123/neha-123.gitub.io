import React, {Component} from 'react'
import { connect } from 'react-redux';
import numeral from 'numeral';
import styled from 'styled-components';
import * as actionCreators from '../store/actions/index';
import { device } from '../mediaQueries/device';

const styles = {
    basketprice : {
        width: '95%',
        margin: 'auto',
        
    },
    spanstyle: {
        fontSize :'20px',
        [device.mobileS]: {
            fontSize: '12px',
            
         },
    },
    cartprice : {
        fontSize:'20px',
        fontWeight:'700',
        [device.mobileS]: {
            fontSize: '15px',
            
         },
    }
}
const SpanStyle = styled('span')(styles.spanstyle);
const BasketPrice = styled('div')(styles.basketprice);
const CartPrice = styled('span')(styles.cartprice);


class TotalPrice extends Component {

    componentDidMount = () => {
        this.props.onCalculateTotalPrice(this.props.basket)
        
    }

    
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
            <BasketPrice>
                <hr />
                <SpanStyle>Subtotal
                    ({basketItem} items)
                    :</SpanStyle>
                <CartPrice>
                    &#x20B9;{numeral(this.props.totalPrice).format('0,0.00')}
                </CartPrice>
            </BasketPrice>
                
            
            
        )
    }
    
}

const mapStatetoProps = state => {
    return {
        totalPrice : state.productReducer.sumTotal,
        basket:state.productReducer.basket
    }

}

const mapDispatchtoProps = dispatch => {
    return {
        onCalculateTotalPrice: (basket) => dispatch(actionCreators.calculateTotalPrice(basket)),
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TotalPrice)
