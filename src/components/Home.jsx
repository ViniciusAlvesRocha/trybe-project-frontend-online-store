import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/icone.png';
import InputSearch from './InputSearch';
import * as api from '../services/api';
import ProductCard from './ProductCard';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSubmitFetch = this.handleSubmitFetch.bind(this);

    this.state = {
      products: [],
      foundProducts: true,
      value: '',
    };
  }

  handleSubmitFetch() {
    const { value } = this.state;
    return api
      .getProductsFromCategoryAndQuery(null, value)
      .then((data) => this.setState({ products: data.results }))
      .catch(() => {
        this.setState({ foundProducts: false });
      });
  }

  handleInputSearch({ target }) {
    const { value } = target;
    this.setState({ value });
  }

  handleCard() {
    const { products } = this.state;
    return (
      <div className="card-container">
        {products.map((item) => (
          <ProductCard key={ item.id } item={ item } data-testid="product" />
        ))}
      </div>
    );
  }

  render() {
    const { foundProducts } = this.state;
    return (
      <div>
        <div className="">
          <InputSearch
            handleInputSearch={ this.handleInputSearch }
            handleSubmitFetch={ this.handleSubmitFetch }
          />
          <p data-testid="home-initial-message">
            {foundProducts
              ? 'Digite algum termo de pesquisa ou escolha uma categoria.'
              : 'Nenhum produto foi encontrado'}
          </p>
        </div>
        <div>
          <Link to="/cart">
            <button type="button">
              <img
                data-testid="shopping-cart-button"
                src={ Image }
                alt="imagem"
              />
            </button>
          </Link>
        </div>
        {this.handleCard()}
      </div>
    );
  }
}
