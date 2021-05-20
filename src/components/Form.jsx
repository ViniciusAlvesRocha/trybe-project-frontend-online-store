import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="mensagem">
          Mensagem (opcional):
          <textarea
            id="mensagem"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" value="Avaliar">Avaliar</button>
      </form>
    );
  }
}
