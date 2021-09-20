import React, { Component } from 'react';
import { fetcherId } from '../services/fetch';
import Loading from './Loading';

class CharactersDetails extends Component {
  constructor() {
    super()

    this.state = {
      character: null,
    }
  }

  componentDidMount() {
    const { location: { pathname } } = this.props;
    const pathId = pathname.split('/')[1]
    console.log(pathId);
    fetcherId(pathId)
      .then((result) => {
        const { weight, height} = result.appearance
        console.log(result);
        if (weight.length === 2 && height.length === 2) {
          height.splice(0, 1)
          weight.splice(0, 1)
          console.log(weight);
        }
        this.setState({ character: result })
      });
  }

  showDetails = () => {
    const { character: { name, image: { url }, powerstats, appearance } } = this.state;

    return (
      <section className="character">
        <h1 className="name">{ name }</h1>
        <section className="details">
          <img className="thumbnail" src={ url } alt={ name }/>
          <ul className="stats"> PowerStats
            {Object.entries(powerstats).map(([key, value]) => <li>{key}: {value}</li>)}
          </ul>
          <ul className="stats"> Appearance
            { Object.entries(appearance).map(([key, value]) => <li>{key}: {value}</li>)}
          </ul>
        </section>
      </section>
    );
  }

  render() {
    const { character } = this.state;
    return (
      character ? this.showDetails() : <Loading />
    )
  }
    
}

// CRUD
// CREATE
// READE
// UPDATE
// DELETE


export default CharactersDetails;