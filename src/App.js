import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
    </div>
=======
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
>>>>>>> 97038ec15d1e06d20888490e4fed60dd5783a198
  );
}

export default App;
