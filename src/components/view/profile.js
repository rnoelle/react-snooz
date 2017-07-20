import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

require('../../styles/profile.css');

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {}
    }
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {
    return (
      <main>
        <h1>Profile!</h1>
      </main>
    )
  }
}
function mapStateToProps({ users }) {
  return {
    user: users.user
  }
}
export default withRouter(Profile);
