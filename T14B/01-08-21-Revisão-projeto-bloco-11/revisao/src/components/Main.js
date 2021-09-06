import React from 'react';
import Cards from './Cards';
import CategoryList from './CategoryList';

class Main extends React.Component {
  render() {
    const categorias = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

    return (
      <main>
        <CategoryList categoria={ categorias } />
        <Cards />
      </main>
    )
  }
}

export default Main;