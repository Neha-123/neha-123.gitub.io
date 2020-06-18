import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styled from 'styled-components';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state ={
        showSideDrawer : false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer : false});
    }

    toggleSideDrawer = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer };
        }
        );
    }

    render(){
        const StyledMain = styled.div`
        margin-top : 72px;
        `
        
        return(
            <Auxiliary>
                <ToolBar MenuClicked= {this.toggleSideDrawer} />
                <SideDrawer open = {this.state.showSideDrawer} close = {this.closeSideDrawerHandler}/>
                <StyledMain>
                    {this.props.children}
                </StyledMain>
            </Auxiliary>
        )
    }
} 


export default Layout;
