import React, { Component } from 'react'
import ProductList from './ProductList';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

class Product extends Component {

    

    addtoCart = (id) => {
       const selectedProduct = this.props.productlist.find(elm => {
            return elm.id === id
        })
        this.props.onAddProducttoCart(selectedProduct);
        
        
    }

    render() {
        return (
            <ProductList 
                productlist={this.props.productlist}
                addtoCart = {this.addtoCart} />
        )
    }
}
const mapStatetoProps = state => {
    return {
        productlist: state.product,
        basket : state.basket,
        sum: state.sumTotal
    }

}

const mapDispatchtoProps = dispatch => {
    return {
        onAddProducttoCart : (product) => dispatch(actionCreators.addProduct(product)),
        
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Product);
