import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actionCreators from '../../../store/actions/index';

class LogOut extends Component {
    componentDidMount () {
        this.props.onLogout()
    }
    render () {
        return <Redirect to='/' />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout : () => dispatch(actionCreators.authLogOut())
    }
}

export default connect(null, mapDispatchToProps)(LogOut);