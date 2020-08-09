import React, { Component } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const styles = {
    productlist: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    }
}


const ProductlistStyle = styled('div')(styles.productlist);

const ProductList = (props) => {

    return (
            <ProductlistStyle>
                {props.productlist.map(elm => {
                    return (
                        <ProductCard
                            key={elm.id}
                            id={elm.id}
                            imagelink={elm.productImage}
                            productname={elm.productName}
                            rate={elm.rating}
                            price={elm.price}
                            addtoCart={props.addtoCart}
                        />
                    )
                })}

            </ProductlistStyle>
        )
    
}





export default ProductList;