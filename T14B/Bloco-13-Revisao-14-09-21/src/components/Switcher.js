import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import CharactersDetails from './CharactersDetails';

class Switcher extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:id" component={CharactersDetails} />
        {/* <Route path="/form" component={AddCharacter} /> */}
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Switcher;