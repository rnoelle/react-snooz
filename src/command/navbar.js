import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import '../styles/navbar.css'

class Navbar extends Component {
  constructor() {
    super()
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="navbar">
        <img alt="Snooz logo"></img>
        <Router>
          <div className="links">
            <Link to="/dashboard" >Dashboard</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </Router>
      </div>
    )
  }
}

export default Navbar;
