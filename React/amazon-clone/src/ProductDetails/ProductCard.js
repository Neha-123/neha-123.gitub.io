import React from 'react';
import styled from 'styled-components';
import GradeIcon from '@material-ui/icons/Grade';
import numeral from 'numeral';


const styles = {
    productCard : {
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        margin: '10px 10px',
        padding: '20px',
        backgroundColor :'white',
        zIndex: '50',
        alignItems: 'left',
        justifyContent: 'space-between',
        
    },
    img : {
        height: '250px',
        objectFit: 'contain',
        marginBottom: '10px'
    },
    content : {
        maxWidth:'200px',
        textAlign: 'left',
    },
    description : {
        fontSize: '17px',
        color: '#0066c0',
        cursor: 'pointer',
        fontWeight: '500',
        marginBottom: '20px'
    },
    rate : {
        display: 'flex',
        height: '20px',
        marginBottom: '10px'
    },
    star : {
        color: '#f0c14b',
        height: '10px'
    },
    price : {
        fontWeight: '700',
        color: '#B12704',
        height:'12px',
        lineHeight: '12px',
        marginBottom: '10px'
    },
    button : {
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
            background:  '#f2b211'
        }
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


    return (
        <ProductCardStyle>
            <ImgStyled src={props.imagelink} />
            <Content>
                <Description>{props.productname}</Description>
                <Rate>
                    {   Array(Number(props.rate))
                        .fill()
                        .map((_)=> <RateStar fontSize="small"/>)
                    }
                </Rate>
                <Price>&#x20B9;{numeral(props.price).format('0,0.00')}</Price>
            </Content>
            
            <Button onClick={()=>props.addtoCart(props.id)}>Add to Cart</Button>
        </ProductCardStyle>
    )
}




export default ProductCard
