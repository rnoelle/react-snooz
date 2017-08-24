import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './styles/App.css';

import Auth from './Auth/Auth';
import sockets from './services/sockets';

import Home from './components/view/home';
import Profile from './components/view/profile';
import Dashboard from './components/view/dashboard';
import Navbar from './components/command/navbar';
import Footer from './components/command/footer';
import Notification from './components/task/notification';
import Login from './Auth/Login';

import { snooze, editTask } from './services/taskApi';
import apiUrl, { authUrl } from './services/apiUrl';
const auth = new Auth();


class App extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    }
    this.snooze = this.snooze.bind(this);
    this.start = this.start.bind(this);
    this.addNotification = this.addNotification.bind(this);
    sockets(this.addNotification);
  }

  addNotification(toDo) {
    this.state.notifications.forEach(el => {
      if (el._id === toDo._id) {
        return;
      }
    })
    this.setState({
      notifications: [...this.state.notifications, toDo]
    })
  }

  snooze(toDo) {
    for(var i = 0; i < this.state.notifications.length; i++) {
      if (this.state.notifications[i]._id === toDo._id) {
        this.setState({
          notifications: [...this.state.notifications.slice(0, i), ...this.state.notifications.slice(i+1)]
        })
      }
    }
    snooze(toDo);
  }

  start(toDo) {
    for(var i = 0; i < this.state.notifications.length; i++) {
      if (this.state.notifications[i]._id === toDo._id) {
        this.setState({
          notifications: [...this.state.notifications.slice(0, i), ...this.state.notifications.slice(i+1)]
        })
      }
    }
    editTask(toDo._id, {started: new Date()});
  }

  render() {
    var notifications = this.state.notifications.map(notification => {
      return (
        <Notification snooze={this.snooze} start={this.start} toDo={notification}/>
      )
    })
    var stopPage;
    if (notifications.length > 0) {
      stopPage = {overflow: 'hidden'};
    } else {
      stopPage = {};
    }
    return (
      <div className="page-content" style={stopPage}>
        <Navbar auth={auth}/>
            <Route exact path="/" render={(props) => <Home auth={auth} {...props}/>}/>
             <Route exact path="/profile" render={(props) => (
                      <Profile auth={auth} {...props}/>
                    )}
             />
            <Route exact path="/dashboard" render={(props) => (
                     <Dashboard auth={auth} {...props}/>
                   )} />
        <Footer/>
        <div className="notifications-container">
          {notifications}
        </div>
      </div>
    );
  }
}

export default App;
