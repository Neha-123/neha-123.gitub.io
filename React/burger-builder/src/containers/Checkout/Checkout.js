import React, {Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactDetails/ContactDetails";
import {Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

class Checkout extends Component {

// State and componentWillMount() is used when not using REDUX ------------------------------------

    // state= {
    //      ingredients : null,
    //      price: 0
    // }
    // componentWillMount () {
    //     const query= new URLSearchParams(this.props.location.search);
    //     const ingredients= {};
    //     let price=0;
    //     for(let param of query.entries()) {
    //         if(param[0] == 'price' ) {
    //             price = param[1];
    //         }
    //         else {
    //             ingredients[param[0]]= +param[1];
    //         }
    //     }
    //     this.setState({ingredients:ingredients, price: price});
    // }

// State and componentWillMount() is used when not using REDUX ------------------------------------

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render() {
        let summary= <Redirect to="/" />
        if(this.props.ings) {
            const redirect = this.props.purchased ? <Redirect to="/" /> : null;
      summary= (<div> {redirect}
                <CheckoutSummary 
                    // ingredients={this.state.ingredients} 
                    ingredients={this.props.ings} 
                    checkoutCancelled={this.checkoutCancelledHandler} 
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + "/contact-data"} 
                        // render={(props)=> ( <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} 
                    component={ContactData} />
            </div>)      
            
        }
        return(
            <div>
               {summary}
            </div>
            
        )
    }
}

const mapStatetoProps = state => {
    return {
        ings : state.burgerBuilder.ingredients,
        purchased : state.order.purchased
    }
}

export default connect(mapStatetoProps)(Checkout);