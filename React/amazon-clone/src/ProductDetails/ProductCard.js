import React from 'react';
import styled from 'styled-components';
import GradeIcon from '@material-ui/icons/Grade';
import numeral from 'numeral';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import { device } from '../mediaQueries/device';

const styles = {
    productCard: {
        display: 'flex',
        flexDirection: 'column',
        objectFit: 'contain',
        margin: '10px 10px',
        padding: '20px',
        backgroundColor: 'white',
        zIndex: '50',
        alignItems: 'center',
        justifyContent: 'space-between',
        [device.mobileS]: {
            height: '230px',
            padding: '10px',
            lineHeight: '10px',
         },
         [device.tablet]: { 
            height: '300px',
            padding: '12px',
            lineHeight: '15px',
         },
         [device.laptop]: { 
            lineHeight: '20px',
            height: '350px',
         },

    },
    img: {
        width: "100px",
        height: '100px',
        objectFit: 'contain',
        marginBottom: '10px',
        [device.mobileS]: {
            width: "100px",
            height: '100px',
            marginBottom: '5px',
         },
         [device.tablet]: {
            width: "110px",
            height: '110px',
            marginBottom: '7px',
         },
         [device.laptop]: { 
            width: "130px",
            height: '130px',
            marginBottom: '10px',
         },
    },
    content: {
        maxWidth: '200px',
        textAlign: 'left',
        
    },
    description: {
        fontSize: '17px',
        color: '#0066c0',
        cursor: 'pointer',
        fontWeight: '500',
        marginBottom: '20px',
        [device.mobileS]: {
            fontSize: '10px'
         },
         [device.tablet]: {
            fontSize: '12px'
         },
         [device.laptop]: { 
            fontSize: '14px'
         },
    },
    rate: {
        display: 'flex',
        height: '20px',
        marginBottom: '10px'
        
    },
    star: {
        color: '#f0c14b',
        height: '10px',
    },
    price: {
        fontWeight: '700',
        color: '#B12704',
        height: '12px',
        lineHeight: '12px',
        marginBottom: '10px',
        [device.mobileS]: {
            fontSize: '7px'
         },
         [device.tablet]: {
            fontSize: '12px'
         },
    },
    button: {
        background: '#f0c14b',
        borderColor: '#a88734 #9c7e31 #846a29',
        color: '#111',
        borderRadius: '3px',
        borderStyle: 'solid',
        borderWidth: '1px',
        cursor: 'pointer',
        height: '29px',
        outline: 'none',
        '&:hover': {
            background: '#f2b211'
        },
        [device.mobileS]: {
            height: '20px',
         },
         [device.tablet]: {
            height: '25px'
         },
    }
}

const ProductCardStyle = styled('div')(styles.productCard);
const Rate = styled('div')(styles.rate);
const Content = styled('div')(styles.content);
const RateStar = styled(GradeIcon)(styles.star);
const ImgStyled = styled('img')(styles.img);
const Button = styled('button')(styles.button);
const Description = styled('span')(styles.description);
const Price = styled('span')(styles.price);



function ProductCard(props) {
    const addtoCart = (id) => {
        const selectedProduct = props.productlist.find(elm => {
            return elm._id === id
        })
        props.onAddProducttoCart(selectedProduct, props.token);

    }

    return (
        <ProductCardStyle>
            <ImgStyled rel="preconnect" src={props.imagelink} />
            <Content>
                <Description>{props.productname}</Description>
                <Rate>
                    {Array(Number(props.rate))
                        .fill()
                        .map((_) => <RateStar key={Math.random()} fontSize="small" />)
                    }
                </Rate>
                <Price>&#x20B9;{numeral(props.price).format('0,0.00')}</Price>
            </Content>

            <Button onClick={() => addtoCart(props.id)}>Add to Cart</Button>
        </ProductCardStyle>
    )
}

const mapStatetoProps = state => {
    return {
        productlist: state.productReducer.product,
        token: state.customerReducer.token
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onAddProducttoCart: (product, token) => dispatch(actionCreators.addProducttoCart(product, token)),
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(ProductCard)
