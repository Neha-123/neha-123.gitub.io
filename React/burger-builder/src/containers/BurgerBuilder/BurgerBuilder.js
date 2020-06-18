import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat : 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing :  false
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients).map( igKeys => {
            return ingredients[igKeys];
        }).reduce ((sum, el) => {
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const  oldcount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        
        const updatedCount = oldcount + 1;
        const  updatedIngredients = {
           ...this.state.ingredients
       };
       updatedIngredients[type] = updatedCount;
       const newPrice = oldPrice + priceAddition;
       this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

       this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const  oldcount = this.state.ingredients[type];
        if(oldcount <= 0){
            return;
        }
        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICES[type];
        
        const updatedCount = oldcount - 1;
        const  updatedIngredients = {
           ...this.state.ingredients
       };
       updatedIngredients[type] = updatedCount;
       const newPrice = oldPrice - priceDeduction;
       this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

       this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing : true})
    }

    modalClose = () => {
        this.setState({purchasing: false});
    }

    continueHandler = () => {
        alert('You can Continue!')
    }


    render () {
        console.log('BurgerBuilder: this.state.ingredients[meat]', this.state.ingredients["meat"]);
        const disabledInfo = {
            ...this.state.ingredients
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
        console.log('disabledInfo', disabledInfo);
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalclose = {this.modalClose} >
                    <OrderSummary 
                        ingredients = {this.state.ingredients} 
                        modalclose = {this.modalClose}
                        continuePurchase ={this.continueHandler} 
                        totalPriceValue ={this.state.totalPrice}   />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient= {this.addIngredientHandler}
                    removeIngredient = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice} 
                    ordered = {this.purchaseHandler} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;