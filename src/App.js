import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import Categoria from './components/Categoria';
import './App.css';

class App extends React.Component() {
  constructor() {
    super();

    this.state = {
      movieList: [],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Categoria />
        <Switch>
          <Route exact path="/" component={ Home } />

          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
