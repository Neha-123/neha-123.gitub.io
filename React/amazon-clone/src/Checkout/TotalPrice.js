import React, {Component} from 'react'
import { connect } from 'react-redux';
import numeral from 'numeral';
import styled from 'styled-components';

const styles = {
    basketprice : {
        width: '95%',
        margin: 'auto',
        
    },
    spanstyle: {
        fontSize :'20px'
    },
    cartprice : {
        fontSize:'20px',
        fontWeight:'700',
    }
}
const SpanStyle = styled('span')(styles.spanstyle);
const BasketPrice = styled('div')(styles.basketprice);
const CartPrice = styled('span')(styles.cartprice);


class TotalPrice extends Component {
    
    render() {
        return (
            <BasketPrice>
                <hr />
                <SpanStyle>Subtotal({this.props.basket.length} items):</SpanStyle>
                <CartPrice>
                    &#x20B9;{numeral(this.props.totalPrice).format('0,0.00')}
                </CartPrice>
            </BasketPrice>
                
            
            
        )
    }
    
}

const mapStatetoProps = state => {
    return {
        totalPrice : state.sumTotal,
        basket:state.basket
    }

}

export default connect(mapStatetoProps)(TotalPrice)
