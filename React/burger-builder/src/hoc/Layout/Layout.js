import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import styled from 'styled-components';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

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
                <ToolBar isAunthenticated = {this.props.isAunthenticated} MenuClicked= {this.toggleSideDrawer} />
                <SideDrawer isAunthenticated = {this.props.isAunthenticated} open = {this.state.showSideDrawer} close = {this.closeSideDrawerHandler}/>
                <StyledMain>
                    {this.props.children}
                </StyledMain>
            </Auxiliary>
        )
    }
} 

const mapStatetoProps = state => {
    return {
        isAunthenticated : state.auth.token != null
    }
}


export default connect(mapStatetoProps)(Layout);
