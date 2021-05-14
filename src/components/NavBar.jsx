import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
