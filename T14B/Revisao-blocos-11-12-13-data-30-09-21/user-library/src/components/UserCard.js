import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserCard extends Component {
  render() {
    const { user: { first_name, last_name, image, city, state, id } } = this.props;
    return (
      <Link to={`/user/${id}`} className="user">
          <h2>{`${first_name} ${last_name}`}</h2>
          <img src={image} alt={`avatar de ${first_name}`} width="100" />
          <p>{city}</p>
          <p>{state}</p>
      </Link>
    );
  }
}

export default UserCard;