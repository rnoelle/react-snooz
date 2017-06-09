import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import '../styles/navbar.css'

class Navbar extends Component {

  render() {
    return (
      <div>
        <img alt="Snooz logo"></img>
        <Router>
          <div>
            <Link to="/" >Dashboard</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </Router>
      </div>
    )
  }
}

export default Navbar;
