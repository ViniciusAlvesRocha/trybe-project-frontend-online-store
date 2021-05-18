import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

  addToCart = (product) => {
    this.setState((state) => ({ cartList: [...state.cartList, product] }));
  }

  render() {
    const { cartList } = this.state;
    console.log(cartList);
    return (
      <BrowserRouter>
        <NavBar />
        <Categoria />
        <Switch>
          <Route exact path="/" component={ Home } />

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
