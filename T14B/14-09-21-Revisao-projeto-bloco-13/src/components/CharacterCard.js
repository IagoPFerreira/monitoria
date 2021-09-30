import React, { Component } from 'react';
import '../styles/style.css'

class CharacterCard extends Component {
  render() {
    const { character: { 
      name,
      image: { url },
      powerstats,
      appearance,
    } } = this.props;
    // console.log('Card');
    return (
      <section className="card">
        <h1 className="name">{ name }</h1>
        <img className="thumbnail" src={ url } alt={ name }/>
        <ul> PowerStats
          {Object.entries(powerstats).map(([key, value]) => <li>{key}: {value}</li>)}
        </ul>
        <ul> Appearance
          { Object.entries(appearance).map(([key, value]) => <li>{key}: {value}</li>)}
        </ul>



      </section>
    );
  }
}

export default CharacterCard;