import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartCard extends Component {
  render() {
    const {
      id,
      title,
      thumbnail,
      price,
      quantity,
      increaseButton,
      decreaseButton,
    } = this.props;
    return (
      <section>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } width="150px" />
        <p>{price}</p>
        <span data-testid="shopping-cart-product-quantity">
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => increaseButton(id) }
          >
            -
          </button>
          { quantity }
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => decreaseButton(id) }
          >
            +
          </button>
        </span>
      </section>
    );
  }
}

CartCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  increaseButton: PropTypes.func.isRequired,
  decreaseButton: PropTypes.func.isRequired,
};
