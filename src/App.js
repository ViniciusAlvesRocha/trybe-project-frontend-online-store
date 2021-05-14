import React, { Component } from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount = async () => {
    console.log(await getCategories());
    const categories = await getCategories();
    this.updateState(categories);
  }

  updateState = (categories) => {
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        <h1>Categories</h1>
        {categories.map(({ id, name }) => (
          <div id={ id } key={ id }>
            <p>{name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
