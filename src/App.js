import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';

import Home from './components/view/home';
import Profile from './components/view/profile';
import Dashboard from './components/view/dashboard';
import Navbar from './components/command/navbar';
import Footer from './components/command/footer';


class App extends Component {
  render() {
    return (
      <div className="page-content">
        <Navbar></Navbar>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/dashboard" component={Dashboard}/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
