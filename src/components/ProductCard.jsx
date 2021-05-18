import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const {
      item: { title, thumbnail, price },
    } = this.props;
    const { setCart } = this.props;
    return (
      <div className="card" data-testid="product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <div className="img">
          <img src={ thumbnail } alt="img" />
        </div>
        <p>{price}</p>
        <button
          type="button"
          onClick={ () => setCart({ id, title, price, thumbnail }) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  setCart: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
