import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const {
      item: { id, title, thumbnail, price },
      onClick,
    } = this.props;

    return (
      <div className="card" data-testid="product">
        <Link data-testid="product-detail-link" to={ `details/${id}` }>
          Detalhes
        </Link>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <div className="img">
          <img src={ thumbnail } alt="img" />
        </div>
        <p>{price}</p>
        <button
          type="button"
          onClick={ () => onClick({ id, title, thumbnail, price }) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
