import React, { Component } from 'react';
require('../styles/home.css')

export default class Home extends Component {
  render() {
    return (
      <div className="splash">
        <div>
          <h1>The app that learns the way you like to get things done.</h1>
          <button>Get Started</button>
        </div>
      </div>

    )
  }
}
