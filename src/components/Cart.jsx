import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartCard from './CartCard';

export default class Cart extends Component {

  render() {
    const { cartList } = this.props;
    if (cartList.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <div>
          {cartList.map(({ id, title, thumbnail, price, quantity }) => (
            <CartCard
              id={ id }
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              quantity={ quantity }
              increaseButton={ this.increaseButton }
              decreaseButton={ this.decreaseButton }
            />
          ))}
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
