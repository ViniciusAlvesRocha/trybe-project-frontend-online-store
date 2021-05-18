import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: '',
    };
  }

  componentDidMount = async () => {
    await this.cacthProduct();
  }

  cacthProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProductsFromCategoryAndQuery(id);
    this.setState({ loading: false, product });
  }

  render() {
    const { loading, product } = this.state;
    const { title, thumbnail, price } = product;
    console.log(product);
    return (
      <div>
        {
          loading
            ? <Loading />
            : <div>
              <p data-testid="product-detail-name">{`Title: ${title}`}</p>
              <img src={ thumbnail } alt="Product" />
              <p>{`Preço: ${price}`}</p>
              <button type="button">
                <Link to="/cart">Carrinho</Link>
              </button>

            </div>
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
