import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Categoria from './components/Categoria';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      foundProducts: true,
      value: '',
      cartList: [],
    };
  }

  setCart = async ({ categoryId, title, id }) => {
    const { cartList } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, title);
    console.log(results);
    const product = results.find((result) => result.id === id);
    const exist = cartList.find((item) => item.product.id === id);
    this.setState((oldState) => {
      let newCartList = [];
      if (exist) {
        newCartList = oldState.cartList.map((item) => {
          if (item.product.id === product.id) {
            product.quantity += 1;
          }
          return product;
        });
      } else {
        newCartList = [...oldState.cartList, { product, quantity: 1 }];
      }
      return { cartList: newCartList };
    });
    console.log(this.state);
  }

  handleQuantity = (type, id) => {
    const { cartList } = this.state;
    let newCartList = [];

    if (type === 'decrease') {
      const findProduct = cartList.find((product) => product.product.id === id);
      if (findProduct) {
        console.log('dentro do if -');
        newCartList = cartList.map((product) => {
          if (product.product.id === findProduct.product.id) {
            console.log('dentro do if quantity');
            product.quantity -= 1;
          }
          console.log('product', product);
          return product;
        });
      }
    }

    if (type === 'increase') {
      const findProduct = cartList.find((product) => product.product.id === id);
      if (findProduct) {
        console.log('dentro do if -');
        newCartList = cartList.map((product) => {
          if (product.product.id === findProduct.product.id) {
            console.log('dentro do if quantity');
            product.quantity += 1;
          }
          console.log('product', product);
          return product;
        });
      }
    }
    this.setState(() => ({ addCart: newCartList }));
  }

  handleProductsByCategory = async (event) => {
    const { target: { id } } = event;

    const products = await api.getProductsFromCategoryAndQuery(id);
    this.setState({
      products: products.results,
    });
  }

  // funções do requisito 5 INICIO
  handleSubmitFetch = () => {
    const { value } = this.state;

    return api
      .getProductsFromCategoryAndQuery(null, value)
      .then((data) => this.setState({ products: data.results }))
      .catch(() => {
        this.setState({ foundProducts: false });
      });
  };

  handleInputSearch = ({ target }) => {
    const { value } = target;
    this.setState({
      value,
    });
  };
  // funçõesdo requisito 5 FINAL.

  getProductsByCategory = async (id) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
    const products = await response.json();
    return (products.results);
  };

  render() {
    const { products, value, foundProducts, cartList } = this.state;

    return (
      <BrowserRouter>
        <NavBar />
        <Categoria handle={ this.handleProductsByCategory } />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              products={ products }
              value={ value }
              foundProducts={ foundProducts }
              handleSubmitFetch={ this.handleSubmitFetch }
              handleInputSearch={ this.handleInputSearch }
              onClick={ this.setCart }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={
              () => <Cart cartList={ cartList } onClick={ this.handleQuantity } />
            }
          />
          <Route
            path="/details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  cartList: PropTypes.array,
}.isRequire;

export default App;
