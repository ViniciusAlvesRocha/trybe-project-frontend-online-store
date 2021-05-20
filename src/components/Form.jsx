import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.submitComent = this.submitComent.bind(this);
  }

  submitComent() {
    const email = document.getElementById('userEmail').value;
    const msg = document.getElementById('mensageUser').value;
    const listReviews = document.getElementById('reviews');
    const block = `<div className="coment">Usuario: ${email} <br> Mensagem: ${msg}</div>`;
    listReviews.innerHTML = block;
  }

  render() {
    return (
      <div>
        <h3>Deixe sua opinião</h3>
        <form>
          <label htmlFor="userEmail">
            Email:
            <input
              id="userEmail"
              type="email"
              placeholder="E-mail: exemplo@exemplo.com"
            />
          </label>
          <label htmlFor="message">
            Mensagem (opcional):
            <textarea
              cols="33"
              rowls="5"
              placeholder="Mensagem opcional"
              data-testid="product-detail-evaluation"
              id="mensageUser"
            />
          </label>
        </form>
        <button
          type="submit"
          onClick={ this.submitComent }
          className="btn-comment"
        >
          Avaliar
        </button>
        <div className="reviews">
          <ul id="reviews" />
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
