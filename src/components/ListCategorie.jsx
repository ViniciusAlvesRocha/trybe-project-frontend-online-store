import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { handlerChange, categories } = this.props;
    return (
      <section className="select-categorie-component">
        <select onChange={ handlerChange } name="category">
          <option>Selecione uma categoria</option>
          {categories.map(({ name, id }) => (
            <option key={ id } data-testid="category" value={ id }>
              {name}
            </option>
          ))}
        </select>
      </section>
    );
  }
}

ListCategories.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCategories;
