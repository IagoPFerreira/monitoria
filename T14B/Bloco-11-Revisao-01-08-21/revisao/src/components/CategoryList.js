// import { Component } from "react";
import React, { Component} from 'react';

class CategoryList extends Component {
  render() {
    const {categoria} = this.props;
    return (
      <aside>
        <h2>Categorias</h2>
        <ul>
          {
            categoria.map((letra) => (
              <li>Categoria {letra}</li>
            ))
          }
        </ul>
      </aside>
    );
  }
};

export default CategoryList;