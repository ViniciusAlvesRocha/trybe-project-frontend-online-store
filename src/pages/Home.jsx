import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/chekcout">Carrinho</Link>
      </div>
    );
  }
}

export default Home;
