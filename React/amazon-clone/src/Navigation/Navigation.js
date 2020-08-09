import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingBasket from './ShoppingBasket';
import { device } from '../mediaQueries/device';


const styles = {
    navpage : {
        display:'flex',
        flexDirection: 'column',
        width: '100%'
    },
    navbar: {
        display: 'flex',
        backgroundColor: '#131921',
        border: '1px solid black',
        alignItems: 'center',
        paddingTop: '2px',
        paddingBottom: '2px',
        position:'sticky',
        top: '0',
        zIndex: '100',
        [device.mobileS]: {
            width: "205%",
         },
        
        [device.tablet]: {
            width: "99%",
         },
         [device.laptop]: {
            width: "100%",
         },
        
    },
    logo: {
        marginRight: '20px',
        marginLeft: '20px',
        border: '1px solid #131921',
        
        '&:hover': {
            border: '1px solid white',
        }
    },
    img: {
        width: '120px',
        height: '100%',
        objectFit: 'contain',
        [device.mobileS]: {
            width: "50px",
            
         },
         [device.mobileL]: {
            width: "70px",
         },
         [device.laptop]: {
            width: "120px",
         },
          
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        
    },
    input: {
        width: '100%',
       
        [device.mobileS]: {
          
            height: '30px',
         },
        
         [device.desktop]: {
            height: '35px',
         },
    },
    searchIcon: {
        backgroundColor: '#febd69',
        padding: '6px 9px',
        [device.mobileS]: {
            padding: '4px 6px',
         },
    },
    navMenu: {
        display: 'flex',
        alignItems: 'center'
    },
    navMenuItems: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 9px 0 9px',
        marginLeft: '20px',
        width: 'max-content',
        textAlign: 'left',
        border: '1px solid #131921',

        '&:hover': {
            border: '1px solid white',
        },

        [device.mobileS]: {
            marginLeft: '10px',
            padding: '0 4px 0 4px',
         },
    },
    cart: {
        display: 'flex',
        padding: '9px 9px 9px 9px',
        marginLeft: '20px',
        marginRight:'10px',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #131921',
        '&:hover': {
            border: '1px solid white',
        },
        [device.mobileS]: {
            padding: '7px 2px 7px 2px',
            marginLeft: '10px',
            marginRight:'5px',
         },
    },
    navMenuItemfirstLine: {
        color: '#ccc',
        fontSize: '12px',
        lineHeight: '14px',
        height: '17px',
        fontWeight: '400',
        paddingTop: '9px',
        paddingRight: '9px',
        textDecoration: 'none',
        [device.mobileS]: {
            fontSize: '10px',
         },
    },
    navMenuItemSecLine: {
        color: 'white',
        fontSize: '14px',
        lineHeight: '15px',
        fontWeight: '700',
        paddingBottom: '5px',
        [device.mobileS]: {
            fontSize: '12px',
         },
    },
    link : {
        textDecoration: 'none'
    }

}

const NavPage = styled('div')(styles.navpage);
const NavBar = styled('div')(styles.navbar);
const StyledLink = styled(Link)(styles.link);
const LogoDiv = styled('div')(styles.logo);
const LogoImg = styled('img')(styles.img);
const SearchDiv = styled('div')(styles.search);
const SearchIconDiv = styled('div')(styles.searchIcon);
const NavMenu = styled('div')(styles.navMenu);
const NavMenuItems = styled('div')(styles.navMenuItems);
const Cart = styled('div')(styles.cart);
const NavMenuItemsFirstLine = styled('span')(styles.navMenuItemfirstLine);
const NavMenuItemsSecLine = styled('span')(styles.navMenuItemSecLine);
const SearchInput = styled('input')(styles.input);

const Navigation = (props) => {
    return (
        <NavPage>
            {/* Code for Nav Bar */}
            <NavBar>
                <StyledLink to="/">
                    <LogoDiv>
                        <LogoImg src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt="amazon" />
                    </LogoDiv>
                </StyledLink>

                <SearchDiv>
                    <SearchInput />
                    <SearchIconDiv>
                        <SearchRoundedIcon />
                    </SearchIconDiv>

                </SearchDiv>
                <NavMenu>
                    <StyledLink to="/login">
                        <NavMenuItems>
                            <NavMenuItemsFirstLine>Hello, SignIn</NavMenuItemsFirstLine>
                            <NavMenuItemsSecLine>Account & lists</NavMenuItemsSecLine>
                        </NavMenuItems>
                    </StyledLink>
                    <StyledLink to="/">
                        <NavMenuItems>
                            <NavMenuItemsFirstLine>Returns</NavMenuItemsFirstLine>
                            <NavMenuItemsSecLine>& Orders</NavMenuItemsSecLine>
                        </NavMenuItems>
                    </StyledLink>
                    <StyledLink to="/">
                        <NavMenuItems>
                            <NavMenuItemsFirstLine>Your</NavMenuItemsFirstLine>
                            <NavMenuItemsSecLine>Prime</NavMenuItemsSecLine>
                        </NavMenuItems>
                    </StyledLink>
                    <StyledLink to="/checkout">
                        <Cart>
                            <ShoppingBasket />
                        </Cart>
                    </StyledLink>

                </NavMenu>
            </NavBar>
            <div>
                {props.children}
            </div>
        </NavPage>
    )
}

export default Navigation
