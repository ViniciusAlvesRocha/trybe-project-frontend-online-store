import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  renderQuantity() {
    const { cartList } = this.props;
    let total = 0;
    cartList.map(({ quantity }) => {
      total += quantity;
      return total;
    });
    return total;
  }

  renderPrice() {
    const { cartList } = this.props;
    let totalPrice = 0;
    cartList.map(({ product, quantity }) => {
      totalPrice += Number(product.price) * Number(quantity);
      return totalPrice;
    });
    return totalPrice;
  }

  render() {
    const { cartList, onClick } = this.props;
    if (cartList.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <div>
          {cartList.map(({ product, quantity }) => (
            <div key={ product.id }>
              <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.price }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => onClick('decrease', product.id) }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{quantity}</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => onClick('increase', product.id) }
              >
                +
              </button>
              <button type="button">X</button>
            </div>
          ))}
          <p>
            {
              this.renderQuantity()
            }
          </p>
          <p>
            Valor total:
            {
              this.renderPrice()
            }
          </p>
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
