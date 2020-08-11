import React from 'react'
import styled from 'styled-components';
import numeral from 'numeral';

const styles = {
    basket: {
        width: '95%',
        margin: 'auto'
    },
    basketitem : {
        display:'flex',
        marginTop : '20px',
        marginBottom : '20px'
    },
    img : {
        height: '200px',
        width: '150px',
        objectFit : 'contain'
    },
    item : {
        display:'flex',
        justifyContent: 'space-between',
        width:'100%'
    },
    itemdetails : {
        display:'flex',
        flexDirection: 'column',
        marginLeft: '20px',
        lineHeight: '30px',
        alignContent:'left'
    },
    itemdescription: {
        color:'#0066c0',
        fontSize: '20px',
        fontWeight:'700',
        lineHeight: '30px'
    },
    instock : {
        fontSize: '12px',
        color:'green',
    },
    shipping : {
        fontSize: '13px',
        color:'#606060',
    }, 
    certified : {
        width: '80px',
        objectFit: 'contain'
    },
    eventforitem : {
        display: 'flex',
        marginTop:'10px'    
    },
    quantity : {
        marginRight:'20px'
    },
    links : {
        fontSize:'13px',
        color : '#0066C0',
        fontWeight:'600',
        marginRight:'20px',
        cursor:'pointer',
        '&:hover' : {
            color: '#ce760af7',
            textDecoration: 'underline'
        }
    },
    price : {
        marginLeft: '30px',
        fontSize:'20px',
        fontWeight:'700',
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
const Quantity = styled('button')(styles.quantity);
const Links = styled('span')(styles.links);
const Price = styled('span')(styles.price);


const CartItemList = (props) => {
    return (
        <Basket>
            <hr/>
            <BasketItem>
                <StyledImg src={props.productImage} />
                <Item>
                    <Itemdetails>
                        <ItemDescription>
                            {props.productName}
                        </ItemDescription>
                        <Instock>In stock</Instock>
                        <Shipping>Eligible for FREE Shipping</Shipping>
                        <Certified src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" />
                        <EventForItem>
                            <Quantity>Qty</Quantity>
                            <Links 
                               onClick={()=>props.removeItem(props.id)}
                            >Delete</Links>
                            <Links>Save for later</Links>
                            <Links>See more like this</Links>
                        </EventForItem>
                    </Itemdetails>
                    <Price>
                    &#x20B9;{numeral(props.price).format('0,0.00')}
                    </Price>
                </Item>
            </BasketItem>
        </Basket>
    )
}

export default CartItemList;
