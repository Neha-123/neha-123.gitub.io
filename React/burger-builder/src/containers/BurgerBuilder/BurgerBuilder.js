import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler  from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat : 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice : 4,
        purchasable : false,
        purchasing :  false,
        spinner : false,
        error: false
    }

    componentDidMount () {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients : response.data});
            }).catch( error => {
                this.setState({error: true});
            })
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
       // alert('You can Continue!')
       this.setState({spinner : true})
       const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
            customer : {
                name : 'Neha Singh',
                address : {
                    street : 'test 1',
                    zipCode : '123456',
                    country: 'India'
                },
                email : 'test@text.com'
            },
            deliveryMethod : 'fastest'    
        }
        axios.post('/orders.json', order)
                .then( response => this.setState({spinner: false, purchasing: false}))
                    .catch( error => this.setState({spinner: false, purchasing: false}));
    }


    render () {
       // console.log('BurgerBuilder: this.state.ingredients[meat]', this.state.ingredients["meat"]);
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
        let orderSummary = null;
                            
        if(this.state.spinner) {
            orderSummary = <Spinner />
        }

        let burger = (this.state.error) ? <p>ingredients can't be loaded</p>  : <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        addIngredient= {this.addIngredientHandler}
                        removeIngredient = {this.removeIngredientHandler}
                        disabled = {disabledInfo}
                        purchasable = {this.state.purchasable}
                        price = {this.state.totalPrice} 
                        ordered = {this.purchaseHandler} />
                </Auxiliary>
                
            )

            orderSummary = <OrderSummary 
                            ingredients = {this.state.ingredients} 
                            modalclose = {this.modalClose}
                            continuePurchase ={this.continueHandler} 
                            totalPriceValue ={this.state.totalPrice}   />
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

export default withErrorHandler(BurgerBuilder, axios) ;