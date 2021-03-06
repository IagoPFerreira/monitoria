import React from 'react';
import { Link } from 'react-router-dom';
import fetcher from '../services/fetch';
import CharacterCard from './CharacterCard';
import Loading from './Loading';

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
      <Link to={`/${character.id}`}>
        <CharacterCard key={character.id} character={ character } />
      </Link>
    ))
  };

  render() {
    this.results();
    const { isLoading } = this.state;
    return (
      <section className="caracthers-list">
        { isLoading ? <Loading />: this.renderHeroes() }
      </section>
    );
  }
};

export default CharactersList;
