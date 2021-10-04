import React, { Component } from 'react';
import CharactersList from '../components/CharactersList';

class Home extends Component {
  render() {
    return (
      <main>
        <CharactersList />
      </main>
    );
  }
}

export default Home;