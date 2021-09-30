import React, { Component } from 'react';
import Navegation from './Navegation';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Trybe Club</h1>
        <Navegation />
      </header>
    );
  }
}

export default Header;