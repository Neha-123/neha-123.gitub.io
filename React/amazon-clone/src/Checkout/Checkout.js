import React, {Component} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItemList from './CartItemList';
import TotalPrice from './TotalPrice';
import * as actionCreators from '../store/actions/index';

const styles = {
    cart : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left',
        padding: '10px 10px'
    },
    heading : {
        marginLeft: '70px'
    },
    itemlist: {
        display: 'flex',
        flexDirection : 'column',
        marginLeft: '20px',

    }
}



const Cart = styled('div')(styles.cart);
const Heading = styled('div')(styles.heading);
const ItemList = styled('div')(styles.itemlist);

class Checkout extends Component {

    removeItem = (id) => {
        this.props.onRemoveProduct(id)
    }

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
                        <ItemList>
                            {this.props.basket.map(element => {
                                
                                return <CartItemList
                                            key={element.id} 
                                            id={element.id}
                                            productName={element.productName}
                                            productImage={element.productImage}
                                            price={element.price}
                                            removeItem={this.removeItem}
                                    />
                                }) 
                            }
                        </ItemList>
                        <TotalPrice />
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

const mapDispatchtoProps = dispatch => {
    return {
        onRemoveProduct: (id) => dispatch(actionCreators.removeProduct(id))
    }
    
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout)
