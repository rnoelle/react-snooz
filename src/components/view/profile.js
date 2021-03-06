import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUser, editUser } from '../../services/userApi';
import { getTasks } from '../../services/taskApi';
import { numSnoozesAndFinishedTasks } from '../../services/sortTasks';
import { authUrl } from '../../services/apiUrl';

require('../../styles/profile.css');

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      editingEmail: false,
      editingName: false,
      userInputEmail: '',
      userInputName: ''
    }
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  componentWillMount() {
    this.props.auth.isAuthenticated().then(response => {
      if (typeof window !== 'undefined' && !response) {
           window.location.href = `${authUrl}login`;
      }
    })
    if (!this.props.user.display_name) {
      getUser((err, profile) => {
      });
    }
  }

  componentDidMount() {
    getTasks()
  }

  toggleEditing(property) {
        this.setState({
          [`editing${property}`]: !this.state[`editing${property}`]
        })
  }

  handleChange(e, property) {
    this.setState({
      [`userInput${property}`]: e.target.value
    })
  }

  handleSubmit(e, property) {
    e.preventDefault();
    editUser(property, this.state[`userInput${property}`]);
    this.setState({
      [`editing${property}`]: false,
      [`userInput${property}`]: ''
    })
  }

  render() {

    var {
      user
    } = this.props;
    var snoozesAndFinishedTasks = numSnoozesAndFinishedTasks(this.props.tasks || [])
      , snoozes = snoozesAndFinishedTasks[0]
      , finishedTasks = snoozesAndFinishedTasks[1]
      , emailElement
      ;

    if (user.email) {
      !this.state.editingEmail ? emailElement = <h4 onClick={() => this.toggleEditing('Email')}>{user.email}</h4>
      : emailElement = (<form onSubmit={(e) => this.handleSubmit(e, 'Email')}>
        <input type="email" placeholder="Email" defaultValue={user.email} onChange={(e) => this.handleChange(e, 'Email')}/>
      </form>)
    } else {
      !this.state.editingEmail ? emailElement = <h4 className="text-side-subtitle" onClick={() => this.toggleEditing('Email')}>Add email</h4>
      : emailElement = (<form onSubmit={(e) => this.handleSubmit(e, 'Email')}>
        <input type="email" placeholder="Email" value={this.state.userInputEmail} onChange={(e) => this.handleChange(e, 'Email')}/>
      </form>)
    }
    return (

      <main className="profile-main">
        <h1>{user.display_name} <span className="text-side-subtitle">{user.level || "Novice"}</span></h1>
        <h3>Email</h3>
          {emailElement}
        <br/>
        <h3>Finished Tasks</h3>
        <h3 className="text-em-orange">{finishedTasks}</h3>
        <h3>Total Snoozes</h3>
        <h3 className="text-em-orange">{snoozes}</h3>
      </main>
    )
  }
}
function mapStateToProps({ users, tasks }) {
  console.log(tasks);
  return {
    user: users.user || {},
    tasks: tasks.tasks
  }
}
export default connect(mapStateToProps)(withRouter(Profile));
