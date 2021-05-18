import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const {
      item: { title, thumbnail, price, id },
    } = this.props;

    return (
      <div className="card" data-testid="product">
        <Link data-testid="product-details-link" to={ `details/${id}` }>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <div className="img">
            <img src={ thumbnail } alt="img" />
          </div>
          <p>{price}</p>
        </Link>
        <button type="button"> Adicionar ao Carrinho </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
