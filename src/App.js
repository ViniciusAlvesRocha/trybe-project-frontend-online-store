import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categoria from './components/Categoria';
import Home from './components/Home';
import './App.css';
import EmptyCart from './components/EmptyCart';

function App() {
  return (
    <BrowserRouter>
      <Categoria />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/emptyCart" component={ EmptyCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
