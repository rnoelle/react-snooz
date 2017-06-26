import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Home from './view/home';
import Profile from './view/profile';
import Navbar from './command/navbar';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Router>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
