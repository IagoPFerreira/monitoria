import React, {Component} from 'react';

class Card extends Component {
  render() {
    const { image } = this.props;
    return (
      <section>
        <h3>Titulo do Item</h3>
        <img src={image} alt="escolhido"/>
        <p>Descrição do item</p>
      </section>
    )
  }
};

export default Card;