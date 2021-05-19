import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  const { handle } = this.props;
  return (
    <header>
      <nav>
        { categories.map(({ id, name }) => (
          <>
            <NavLink
              data-testid="category"
              to="/"
              key={ id }
              id={ id }
              onClick={ handle }
            >
              {name}
            </NavLink>
            <br />
          </>))}
      </nav>
    </header>
  );
}
}

Categoria.propTypes = {
  handle: PropTypes.func.isRequired,
};
