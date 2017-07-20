import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('../../styles/home.css')

export default class Home extends Component {
  render() {
    if (this.props.location.search === '?login=true') {
      this.props.auth.login();
    }
    return (
      <div>
        <div className="splash">
          <div>
            <h1>The app that learns the way you like to get things done.</h1>
            <button>Get Started</button>
          </div>
        </div>
        <main>
          <section className="three-boxes">
            <div id="diag"></div>
            <div id="diag2"></div>
            <h1>How to Snooz</h1>
            <div className="three-boxes-container">
              <div className="box">
                <h2>1. Add a task</h2>
                <p>With the features of any other todo app, you won't be missing out on anything you love from your other todo app.</p>
              </div>
              <div className="box">
                <h2>2. Hit snooze</h2>
                <p>Snooz will remind you to get things done. If you don't have time, just push snooze. </p>
              </div>
              <div className="box">
                <h2>3. Snooz learns</h2>
                <p>Snooz uses the times you snooze to learn when to remind you, so you can actually get things done.</p>
              </div>
            </div>
          </section>
          <section className="cta2">
            <div className="left-chev"></div>
            <div>
              <h1>Try Snooz Now</h1>
              <Link to="/dashboard"><button>Register for an account</button></Link>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
