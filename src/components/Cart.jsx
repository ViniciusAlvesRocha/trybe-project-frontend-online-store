import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EmptyCart extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { cartList } = this.state;
    console.log(this.state);
    if (cartList.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    }
  }
}
