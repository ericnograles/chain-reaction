import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from '../Home';
import Sample from '../Sample';
import Login from '../Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace) {
    var store = this.props.store;
    if (store.getState().user.status !== 'authenticated') {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/sample" component={Sample} onEnter={this.requireAuth}></Route>
        <Route path="*" component={Home}></Route>
      </Router>
    );
  }
}