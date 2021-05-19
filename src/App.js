import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import Categoria from './components/Categoria';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
  }

  setCart = async ({ categoryId, title }) => {
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, title);
    console.log(results);
    const product = results.find((result) => result.title === title);
    this.setState((oldState) => ({ cartList: [...oldState.cartList, product] }));
    console.log(`entrei aqui, produto emcontrado: ${product}`);
  }

  render() {
    // console.log(this.setCart());
    const { cartList } = this.state;
    console.log(cartList);
    return (
      <BrowserRouter>
        <NavBar />
        <Categoria />
        <Switch>
          <Route exact path="/" render={ () => <Home onClick={ this.setCart } /> } />
          <Route exact path="/cart" render={ () => <Cart cartList={ cartList } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  cartList: PropTypes.array,
}.isRequire;

export default App;
