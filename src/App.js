import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categoria from './components/Categoria';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Categoria />
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
