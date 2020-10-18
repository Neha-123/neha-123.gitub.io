import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import numeral from 'numeral';
import QuantitySelect from './QuantitySelect';
import * as actionCreators from '../store/actions/index';
import { device } from '../mediaQueries/device';

const styles = {
    basket: {
        width: '95%',
        margin: 'auto'
    },
    basketitem: {
        display: 'flex',
        marginTop: '20px',
        marginBottom: '20px'
    },
    img: {
        objectFit: 'contain',
        [device.mobileS]: {
            height: '125px',
         },
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    itemdetails: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',
        lineHeight: '30px',
        alignContent: 'left',
         

    },
    itemdescription: {
        color: '#0066c0',
        fontSize: '17px',
        fontWeight: '700',
        lineHeight: '30px',
        [device.mobileS]: {
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '20px',
         },
    },
    instock: {
        fontSize: '12px',
        color: 'green',
    },
    shipping: {
        fontSize: '13px',
        color: '#606060',
    },
    certified: {
        width: '80px',
        objectFit: 'contain'
    },
    eventforitem: {
        display: 'flex',
        marginTop: '10px',
        
    },
    quantity: {
        marginRight: '20px'
    },
    delete: {
        fontSize: '13px',
        color: '#0066C0',
        fontWeight: '600',
        marginRight: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: '#ce760af7',
            textDecoration: 'underline'
        },
        [device.mobileS]: {
            fontSize: '12px',
            fontWeight: '400',
            marginRight: '7px',
         },
    },
    save: {
        fontSize: '13px',
        color: '#0066C0',
        fontWeight: '600',
        marginRight: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: '#ce760af7',
            textDecoration: 'underline'
        },
        [device.mobileS]: {
            fontSize: '12px',
            fontWeight: '400',
            marginRight: '7px',
            width:'70px'
         },
    },
    more: {
        fontSize: '13px',
        color: '#0066C0',
        fontWeight: '600',
        marginRight: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: '#ce760af7',
            textDecoration: 'underline'
        },
        [device.mobileS]: {
            fontSize: '12px',
            fontWeight: '400',
            marginRight: '7px',
            width:'115px'
         },
    },
    price: {
        marginLeft: '30px',
        fontSize: '20px',
        fontWeight: '700',
        [device.mobileS]: {
            fontSize: '15px',
            fontWeight: '600',
         },
    }
}

const Basket = styled('div')(styles.basket);
const Item = styled('div')(styles.item);
const BasketItem = styled('div')(styles.basketitem);
const StyledImg = styled('img')(styles.img);
const Itemdetails = styled('div')(styles.itemdetails);
const ItemDescription = styled('span')(styles.itemdescription);
const Instock = styled('span')(styles.instock);
const Shipping = styled('span')(styles.shipping);
const Certified = styled('img')(styles.certified);
const EventForItem = styled('div')(styles.eventforitem);
const Delete = styled('span')(styles.delete);
const Save = styled('span')(styles.save);
const More = styled('span')(styles.more);
const Price = styled('span')(styles.price);


const CartItemList = React.memo(props => {

    const removeItem = (id) => {
        props.onRemoveProduct(id, props.token)
    }

    return (
        <Basket>
            <hr />
            <BasketItem>
                <StyledImg src={props.productImage} />
                <Item>
                    <Itemdetails>
                        <ItemDescription>{props.productName}</ItemDescription>
                        <Instock>In stock</Instock>
                        <Shipping>Eligible for FREE Shipping</Shipping>
                        <Certified src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" />
                        <EventForItem>
                            <QuantitySelect
                                quantity={props.quantity}
                                id={props.id}
                                product_id={props.product_id} />
                            <Delete
                                onClick={() => removeItem(props.id)}
                            >Delete</Delete>
                            <Save>Save for later</Save>
                            <More>See more like this</More>
                        </EventForItem>
                    </Itemdetails>
                    <Price>&#x20B9;{numeral(props.price).format('0,0.00')}</Price>
                </Item>
            </BasketItem>
        </Basket>
    )
})

const mapStateToProps = state => {
    return {
        token: state.customerReducer.token
    }
}


const mapDispatchtoProps = dispatch => {
    return {
        onRemoveProduct: (id, token) => dispatch(actionCreators.removeProductDb(id, token))
    }

}

export default connect(mapStateToProps, mapDispatchtoProps)(CartItemList);
