import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './styles/App.css';

import Auth from './Auth/Auth';
import Callback from './Auth/Callback';

import Home from './components/view/home';
import Profile from './components/view/profile';
import Dashboard from './components/view/dashboard';
import Navbar from './components/command/navbar';
import Footer from './components/command/footer';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <div className="page-content">
        <Navbar auth={auth}/>
            <Route exact path="/" render={(props) => <Home auth={auth} {...props}/>}/>
            <Route exact path="/profile" render={(props) => {
              if ( !auth.isAuthenticated() ) {
                return (
                  <Redirect to="/?login=true"/>
                )
              } else {
                return (
                  <Profile auth={auth} {...props}/>
                )
                }
              }
            } />

            <Route exact path="/dashboard" render={(props) => <Dashboard auth={auth} {...props}/> } />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props}/>
            }}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
