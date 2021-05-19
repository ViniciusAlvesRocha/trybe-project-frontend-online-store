import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from './Loading';
// import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: [],
    };
  }

  componentDidMount = async () => {
    await this.cacthProduct();
  }

  cacthProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await this.apiProduct(id);
    this.setState({ loading: false, product });
  }

  apiProduct = async (id) => {
    const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return product.json();
  }

  render() {
    const { loading, product } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        {
          loading
            ? <Loading />
            : <section>
              <p data-testid="product-detail-name">{`Title: ${title}`}</p>
              <img src={ thumbnail } alt="Product" />
              <p>{`Preço: ${price}`}</p>
              <Link to="/cart">
                <button type="button">
                  Adicionar ao Carrinho
                </button>
              </Link>
            </section>
        }
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
