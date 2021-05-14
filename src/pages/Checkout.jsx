import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <button type="submit" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </button>
    );
  }
}

export default Checkout;
