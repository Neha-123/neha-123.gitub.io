import React, { Component } from 'react'
import ProductList from './ProductList';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';


class Product extends Component {

    componentDidMount = () => {
        this.props.onFetchAllProducts();
        
    }


    render() {
        return (
            <ProductList
                productlist={this.props.productlist} />
        )
    }
}
const mapStatetoProps = state => {
    return {
        productlist: state.productReducer.product
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onFetchAllProducts: () => dispatch(actionCreators.fetchProduct())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Product);
