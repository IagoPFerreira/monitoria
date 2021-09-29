import React, { Component } from 'react';
import './App.css';
import { getUserById } from './services/fetchAPI';

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      result: '',
    }
  }

  componentDidMount() {
    this.handle()
  }

  handle = () => {
    getUserById(1)
    .then((result) => {
      this.setState({ result, isLoading: false })
    })
  }

  render () {
    const { isLoading, result } = this.state;
    // // console.log('resposta', getUserById(1));
    // getUserById(1)
    // .then((result) => console.log(result))
    // this.handle()
    return ( !isLoading && console.log(result));
  }
}

export default App;
