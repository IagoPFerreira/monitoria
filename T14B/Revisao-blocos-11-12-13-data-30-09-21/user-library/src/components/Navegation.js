import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navegation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/user'>Usuario</Link>
          </li>
          <li>
            <Link to='/contact'>Contatos</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navegation;
