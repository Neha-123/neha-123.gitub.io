import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler  from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../store/actions/index';
//import {Redirect} from 'react-router-dom';

// const INGREDIENT_PRICES = {
//     salad : 0.5,
//     cheese: 0.4,
//     meat : 1.3,
//     bacon: 0.7
// }

class BurgerBuilder extends Component {

    state = {
        // ingredients : null,
        // totalPrice : 4,
        // purchasable : false,
        purchasing :  false,
        spinner : false,
        //error: false
    }


    // asynchronus calling taken care by redux-------------------------------------------------
    componentDidMount () {

        this.props.onGetIngredient();
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients : response.data});
        //     }).catch( error => {
        //         this.setState({error: true});
        //     })
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients).map( igKeys => {
            return ingredients[igKeys];
        }).reduce ((sum, el) => {
            return sum + el;
        },0);
      //  this.setState({purchasable: sum > 0 });
      return sum > 0;
    }

//addIngredientHandler () and removeIngredientHandler () is taken care by REDUX -------------------------------

    // addIngredientHandler = (type) => {
    //     const  oldcount = this.state.ingredients[type];
    //     const oldPrice = this.state.totalPrice;
    //     const priceAddition = INGREDIENT_PRICES[type];
        
    //     const updatedCount = oldcount + 1;
    //     const  updatedIngredients = {
    //        ...this.state.ingredients
    //    };
    //    updatedIngredients[type] = updatedCount;
    //    const newPrice = oldPrice + priceAddition;
    //    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

    //    this.updatePurchaseState(updatedIngredients);

    // }

    // removeIngredientHandler = (type) => {
    //     const  oldcount = this.state.ingredients[type];
    //     if(oldcount <= 0){
    //         return;
    //     }
    //     const oldPrice = this.state.totalPrice;
    //     const priceDeduction = INGREDIENT_PRICES[type];
        
    //     const updatedCount = oldcount - 1;
    //     const  updatedIngredients = {
    //        ...this.state.ingredients
    //    };
    //    updatedIngredients[type] = updatedCount;
    //    const newPrice = oldPrice - priceDeduction;
    //    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

    //    this.updatePurchaseState(updatedIngredients);
    // }


//addIngredientHandler () and removeIngredientHandler () is taken care by REDUX -------------------------------


    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing : true})
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/Auth');
        }
        
    }

    modalClose = () => {
        this.setState({purchasing: false});
    }

    continueHandler = () => { // use Commented part when not using REDUX
        // const queryParams =[];
        // for(let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]));

        // }
        // queryParams.push('price='+this.state.totalPrice);
        // const queryString = queryParams.join('&');

        // this.props.history.push({
        //     pathname: "/checkout",
        //     search:"?" + queryString
        // });
        this.props.onInitPuchase();
        this.props.history.push("/checkout");
    }


    render () {
        const disabledInfo = {
            ...this.props.ingrednt
        }
        for (let key in disabledInfo ){
            if(disabledInfo[key] <= 0)
            {
                disabledInfo[key] = true;
            }
            else{
                disabledInfo[key]=false;
            }
        }
        let orderSummary = null;
                            
        // if(this.state.spinner) {
        //     orderSummary = <Spinner />
        // }

        let burger = (this.props.error) ? <p>ingredients can't be loaded</p>  : <Spinner />
        if (this.props.ingrednt) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.props.ingrednt}/>
                    <BuildControls 
                        addIngredient= {this.props.onAddIngredient}
                        removeIngredient = {this.props.onRemoveIngredient}
                        disabled = {disabledInfo}
                       // purchasable = {this.state.purchasable}
                        purchasable = {this.updatePurchaseState(this.props.ingrednt)}
                        isAuth = {this.props.isAuthenticated}
                        price = {this.props.price} 
                        ordered = {this.purchaseHandler} />
                </Auxiliary>
                
            )

            orderSummary = <OrderSummary 
                            ingredients = {this.props.ingrednt} 
                            modalclose = {this.modalClose}
                            continuePurchase ={this.continueHandler} 
                            totalPriceValue ={this.props.price}   />
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalclose = {this.modalClose} >
                    {orderSummary}
                </Modal>
                {burger}

            </Auxiliary>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        ingrednt: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error : state.burgerBuilder.error,
        isAuthenticated : state.auth.token != null
    }
    
}

const mapDispatchtoProps = dispatch => {
    return {
        onAddIngredient : (ingName)=> dispatch ( actionCreators.addIngredient(ingName) ),
        onRemoveIngredient : (ingName)=> dispatch ( actionCreators.removeIngredient(ingName)), 
        onGetIngredient : () => dispatch( actionCreators.getIngredient()),
        onInitPuchase: () => dispatch(actionCreators.initPurchase()),
        onSetAuthRedirectPath : (path) => dispatch(actionCreators.redirectPath(path))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (withErrorHandler(BurgerBuilder, axios)) ;