import React from 'react';
import { Grid, Paper} from '@material-ui/core';
import styled from 'styled-components';


const styles = {
    headerStyle: {
      backgroundColor:'#00134d !important',
      color: 'white !important',
      fontFamily : 'Aharoni !important',
      fontWeight: 'bold !important',
      width: '100% !important',
      padding:'30px !important',
      display: 'flex !important',
      justifyContent: 'center !important',
      fontSize:'30px !important'
      
    }
}
const HeaderStyle = styled(Paper)(styles.headerStyle);

const Header = (props) => {
    return (
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <HeaderStyle elevation={10}>Todo List</HeaderStyle>
                </Grid>
                <Grid item xs={12} >{props.children}</Grid>
                
            </Grid>
     )
}

export default Header;