import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
