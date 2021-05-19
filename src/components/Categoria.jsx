import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Categoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

getApi = async () => {
  const categoriesApi = await getCategories();
  this.setState({ categories: categoriesApi });
}

render() {
  const { categories } = this.state;
  return (
    <header>
      <nav>
        { categories.map(({ id, name }) => (
          <NavLink
            data-testid="category"
            to="/"
            key={ id }
          >
            {name}
          </NavLink>))}
      </nav>
    </header>
  );
}
}
