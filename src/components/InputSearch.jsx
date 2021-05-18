import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { handleInputSearch, handleSubmitFetch } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ (e) => handleInputSearch(e) }
          placeholder="O que você está buscando?"
        />
        <button
          data-test="query-button"
          type="submit"
          onClick={ handleSubmitFetch }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

InputSearch.propTypes = {
  handleInputSearch: PropTypes.func.isRequired,
  handleSubmitFetch: PropTypes.func.isRequired,
};
