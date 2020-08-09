import React, {Component} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItemList from './CartItemList';

const styles = {
    cart : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left'
    },
    heading : {
        marginLeft: '20px'
    }
}

const Cart = styled('div')(styles.cart);
const Heading = styled('div')(styles.heading);

class Checkout extends Component {
    render () {
        return (
            <Cart>
                <Heading>
                    {this.props.basket.length === 0 
                        ? <h2>Your Basket is empty</h2>
                        : <h2>Shopping Cart</h2> 
                    }
                </Heading>
                {this.props.basket.length > 0 
                    && 
                    <div>
                        {this.props.basket.map(element => {
                            console.log(element);
                            return <CartItemList
                                        key={element.id} 
                                        id={element.id}
                                        productName={element.productName}
                                        productImage={element.productImage}
                                        price={element.price}
                                />
                            }) 
                        }
                    </div>
                }
            </Cart>
        )
    }
    
}

const mapStatetoProps = state => {
    return {
        basket: state.basket
    }
    
}

export default connect(mapStatetoProps)(Checkout)
