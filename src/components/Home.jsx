import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../img/icone.png';
import InputSearch from './InputSearch';
import ProductCard from './ProductCard';

export default class Home extends Component {
  handleCard() {
    const { products, onClick } = this.props;
    return (
      <div className="card-container">
        {products?.map((item) => (
          <ProductCard
            key={ item.id }
            item={ item }
            data-testid="product"
            onClick={ onClick }
          />
        ))}
      </div>
    );
  }

  render() {
    const { foundProducts, handleInputSearch, handleSubmitFetch } = this.props;
    return (
      <div>
        <div>
          <Link to="/cart">
            <button type="button">
              <img
                data-testid="shopping-cart-button"
                src={ Image }
                alt="imagem"
                width="20px"
              />
            </button>
          </Link>
        </div>
        <div className="">
          <InputSearch
            handleInputSearch={ handleInputSearch }
            handleSubmitFetch={ handleSubmitFetch }
          />
          <p data-testid="home-initial-message">
            {foundProducts
              ? 'Digite algum termo de pesquisa ou escolha uma categoria.'
              : 'Nenhum produto foi encontrado'}
          </p>
        </div>
        {this.handleCard()}
      </div>
    );
  }
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
  products: PropTypes.arrayOf().isRequired,
  foundProducts: PropTypes.func.isRequired,
  handleInputSearch: PropTypes.func.isRequired,
  handleSubmitFetch: PropTypes.func.isRequired,
};
