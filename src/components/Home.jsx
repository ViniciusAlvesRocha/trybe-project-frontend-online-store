import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/icone.png';
import InputSearch from '../components/InputSearch';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Link to="/cart">
            <button type="button">
              <img data-testid="shopping-cart-button" src={ Image } alt="imagem" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
