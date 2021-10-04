import React, { Component } from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <UserList />
      </>
    );
  }
}

export default Home;