import React from 'react';
import styled from 'styled-components';
import Product from '../ProductDetails/Product';
import BackDrop from '../Backdrop/BackDrop';

const styles = {

    addImg: {
        width: '100%'
    },
    img: {
        width: '100%',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        marginBottom: '-10%',
        objectFit: 'contain'
    }

}

const AddImgDiv = styled('div')(styles.addImg);

const ImgStyled = styled('img')(styles.img);

const HomePage = () => {

    return (
        <BackDrop>
            <AddImgDiv>
                <ImgStyled rel="preconnect" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/Primeday_FLAPHero/PC/1xmidnight-1._CB408619608_.jpg"
                    alt="" />
            </AddImgDiv>
            <Product />
        </BackDrop>
    )


}

export default HomePage
