import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';

class Orders extends Component {
    // state = {
    //     orders : [],
    //     loading: false
    // }

    componentDidMount () {
        this.props.onFetchOrders();
    }

    

    render () {
        return (
            <div>
                {this.props.orders.map(order => {
                    return <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                })}
            </div>
        )
    }
}


const mapStatetoProps = state => {
    return {
        orders : state.order.orders,
        loading : state.order.loading
    }
    
}

const mapDispatchtoProps = dispatch => {
    return {
        onFetchOrders : () =>dispatch(actionCreators.fetchOrders())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(withErrorHandler(Orders, axios));