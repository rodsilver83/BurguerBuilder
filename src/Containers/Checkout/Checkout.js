import React, { Component, Fragment } from "react";
import CheckoutSummary from '../../Components/CheckoutSummary/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        meat: 1,
        cheese: 1,
        lettuce: 1
      },
      price: 0
    }
  }

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = param[1];
      }
    }
    this.setState({ ingredients: ingredients, price: price });
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  render() {
    return (<Fragment>
      <CheckoutSummary ingredients={this.state.ingredients}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}>
      </CheckoutSummary>
      <Route path={this.props.match.path + '/contact-data'}
        render={() => <ContactData
          ingredients={this.state.ingredients}
          price={this.state.price} {...this.props}>
        </ContactData>}>
      </Route>
    </Fragment>)
  }
}

export default Checkout;