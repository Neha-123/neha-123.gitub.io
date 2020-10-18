import React, { useState } from 'react'
import { connect } from 'react-redux';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import * as actionCreators from '../store/actions/index';

const QuantitySelect = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);

    const handleChange = (event) => {
        setQuantity(event.target.value);
        updateQuantity(event.target.value);
    };

    const removeItem = (id) => {
        props.onRemoveProduct(id, props.token)
    }

    const updatebasketQuantity = (id, quantity, productId) => {
        props.onSetQuantity(id, quantity, productId, props.token);
        
    }

    const updateQuantity = (quantity) => {
        if (quantity === 0) {
            removeItem(props.id)
        } else {
            updatebasketQuantity(props.id, quantity, props.product_id);
        }

    }

    return (
        <div>
            <FormControl >
                <Select
                    value={quantity}
                    onChange={handleChange}
                    displayEmpty

                >
                    <MenuItem value={0}>0 (Delete)</MenuItem>
                    <MenuItem value={1}>Qty: 1</MenuItem>
                    <MenuItem value={2}>Qty: 2</MenuItem>
                    <MenuItem value={3}>Qty: 3</MenuItem>
                    <MenuItem value={4}>Qty: 4</MenuItem>
                    <MenuItem value={5}>Qty: 5</MenuItem>
                    <MenuItem value={6}>Qty: 6</MenuItem>
                    <MenuItem value={7}>Qty: 7</MenuItem>
                    <MenuItem value={8}>Qty: 8</MenuItem>
                    <MenuItem value={9}>Qty: 9</MenuItem>
                    <MenuItem value={10}>Qty: 10+</MenuItem>
                </Select>
            </FormControl>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        token: state.customerReducer.token
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onRemoveProduct: (id, token) => dispatch(actionCreators.removeProductDb(id, token)),
        onSetQuantity : (id, quantity, productId, token) => dispatch(actionCreators.updateBasketQuantity(id, quantity, productId, token))
    }
    
}



export default connect(mapStateToProps, mapDispatchtoProps)(QuantitySelect);
