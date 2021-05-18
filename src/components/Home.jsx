import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/icone.png';

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
        <Link to={ `movies/${id}` }>Card do produto</Link>
      </div>
    );
  }
}
