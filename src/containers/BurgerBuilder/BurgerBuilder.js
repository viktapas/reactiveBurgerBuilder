import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosInstance from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from "../../store/actions/index";


class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };
  componentDidMount() {
    console.log(this.props);
    // axiosInstance.get('/ingredients.json')
    //   .then(response => {
    //     // console.log(response.data);
    //     this.setState({ ingredients: response.data });
    //     // console.log(this.props.ings);
    //   })
    //   .catch(error => {
    //     this.setState({ error: true });
    //   });
  }
  updatePurchasableState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  };
  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.state.error ? <p style={{ textAlign: 'center', paddingTop: '20px' }}>Failed to fetch ingredients. Please check your connection.</p> : <Spinner />;
    if (this.props.ings) {
      burger = (<Aux>
        <Burger ingredients={this.props.ings} />
        <BuildControls
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          price={this.props.totalPrice}
          purchasable={this.updatePurchasableState(this.props.ings)}
          order={this.purchaseHandler}
        />
      </Aux>);
      orderSummary = <OrderSummary
        ingredients={this.props.ings}
        totalPrice={this.props.totalPrice}
      />;
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        <Modal
          loading={this.state.loading}
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
          continuePurchase={this.purchaseContinueHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    totalPrice: state.totalPrice
  }
};
const mapDisptachToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(withErrorHandler(BurgerBuilder, axiosInstance));
