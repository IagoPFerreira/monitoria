import React from 'react';
import trybeLogo from '../images/logo-trybe-roxo.png';
import '../styles/style.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={trybeLogo} alt="Logo site" class="logo" />
        <h1>Título para a página</h1>
        <nav class="navegacao">
          <ul>
            <li class="nav-item">Item 1</li>
            <li class="nav-item">Item 2</li>
            <li class="nav-item">Item 3</li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;