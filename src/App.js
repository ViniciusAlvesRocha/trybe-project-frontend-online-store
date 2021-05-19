import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import Categoria from './components/Categoria';
import './App.css';
import * as api from './services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      foundProducts: true,
      value: '',
    };
  }

  handleProductsByCategory = async (event) => {
    const { target: { id } } = event;
    console.log(id);
    const products = await api.getProductsFromCategoryAndQuery(id);
    this.setState({
      products: products.results,
    });
  }

  // funções do requisito 5 INICIO
  handleSubmitFetch = () => {
    const { value } = this.state;
    console.log(value);
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
  // funçõesdo requisito 5 FINAL

  getProductsByCategory = async (id) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
    const products = await response.json();
    return (products.results);
  };

  render() {
    const { products, value, foundProducts } = this.state;
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
            />) }
          />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
