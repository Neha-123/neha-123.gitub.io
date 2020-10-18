import React, { Component } from 'react'
import * as actionCreators from '../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LogOut extends Component {


    render() {
        let isRedirect = null;
        if (this.props.isAuthenticated) {
            this.props.onLogout(this.props.token, this.props.tokenId);
        } else {
            isRedirect = <Redirect to={this.props.redirectPath} />
        }
        return (
            <div>
                {isRedirect}
            </div>
        )
    }

}

const mapStatetoProps = state => {
    return {
        token: state.customerReducer.token,
        tokenId: state.customerReducer.tokenId,
        isAuthenticated: state.customerReducer.token !== null,
        redirectPath: state.customerReducer.redirectPath
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onLogout: (token, tokenId) => dispatch(actionCreators.logout(token, tokenId))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LogOut)
