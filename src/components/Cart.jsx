import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  render() {
    const { cartList } = this.props;
    if (cartList.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <div>
          {cartList.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </div>
          ))}
          <p
            data-testid="shopping-cart-product-quantity"
          >
            Quantidade de produtos:
            {cartList.length}
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
