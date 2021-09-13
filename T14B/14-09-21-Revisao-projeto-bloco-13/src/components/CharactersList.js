import React from 'react';
import fetcher from '../services/fetch';
import CharacterCard from './CharacterCard';

class CharactersList extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      charactersList: ''
    }
  };

  results = () => {
    const { charactersList } = this.state;

    if (charactersList) return true;

    fetcher.then((result) => {
      this.setState({
        isLoading: false,
        charactersList: result
      })
    });
  };
  
  renderHeroes = () => {
    const { charactersList } = this.state;
    return charactersList.map((character) => (
      <CharacterCard key={character.id} character={ character } />
    ))
  };

  render() {
    this.results();
    const { isLoading } = this.state;
    return (
      <section className="caracthers-list">
        { isLoading ? <p>Loading</p> : this.renderHeroes() }
      </section>
    );
  }
};

export default CharactersList;
