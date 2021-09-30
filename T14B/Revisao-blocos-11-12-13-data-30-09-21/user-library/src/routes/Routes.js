import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserDetails from '../pages/UserDetails';

class Routes extends Component {
  render() {
    return (
        <Switch>
          <Route path="/user/:id" component={UserDetails} />
          <Route exact path="/" component={Home}/>
        </Switch>
    );
  }
}

export default Routes;