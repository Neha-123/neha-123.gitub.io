import React, { Component } from 'react'
import ProductList from './ProductList';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';


class Product extends Component {


    addtoCart = (id) => {
        this.props.onAddProducttoCart(id);
    }


    render() {
        return (
            <ProductList
                productlist={this.props.productlist}
                addtoCart={this.addtoCart} />
        )
    }
}
const mapStatetoProps = state => {
    return {
        productlist: state.product
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onAddProducttoCart: (id) => dispatch(actionCreators.addProducttoCart(id)),
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Product);
