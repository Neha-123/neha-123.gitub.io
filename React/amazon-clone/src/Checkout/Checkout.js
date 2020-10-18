import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItemList from './CartItemList';
import TotalPrice from './TotalPrice';



const styles = {
    cart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left',
        padding: '10px 10px'
    },
    heading: {
        marginLeft: '70px'
    },
    itemlist: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',

    }
}

const Cart = styled('div')(styles.cart);
const Heading = styled('div')(styles.heading);
const ItemList = styled('div')(styles.itemlist);
class Checkout extends Component {
    render() {

        return (
            <Cart>
                <Heading>
                    {this.props.basket.length === 0 || !(this.props.isAuthenticated)
                        ? <h2>Your Basket is empty</h2>
                        : <h2>Shopping Cart</h2>
                    }
                </Heading>
                {this.props.basket.length > 0 && (this.props.isAuthenticated)
                    &&
                    <div>
                        <ItemList>
                            {this.props.basket.map(element => {

                                return <CartItemList
                                    key={element._id}
                                    id={element._id}
                                    product_id={element.product_id}
                                    productName={element.productName}
                                    productImage={element.productImage}
                                    price={element.price}
                                    quantity={element.quantity}
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
        basket: state.productReducer.basket,
        isAuthenticated: state.customerReducer.token !== null
    }

}
export default connect(mapStatetoProps)(Checkout)
