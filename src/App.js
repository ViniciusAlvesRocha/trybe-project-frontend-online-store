import React from 'react';
import './App.css';
import { getCategories } from './services/api';

function App() {
  return (
    <div className="App">
      <h1>Categories</h1>
      {getCategories.map(({ id, name }) => (
        <div id={ id } key={ id }>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
