import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
require('../../styles/profile.css');

class Profile extends Component {
  render() {
    return (
      <main>
        <h1>Profile!</h1>
      </main>
    )
  }
}

export default withRouter(Profile);
