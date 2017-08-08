import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './styles/App.css';

import Auth from './Auth/Auth';

import Home from './components/view/home';
import Profile from './components/view/profile';
import Dashboard from './components/view/dashboard';
import Navbar from './components/command/navbar';
import Footer from './components/command/footer';

const auth = new Auth();


class App extends Component {
  render() {
    return (
      <div className="page-content">
        <Navbar auth={auth}/>
            <Route exact path="/" render={(props) => <Home auth={auth} {...props}/>}/>
            {/* <Route exact path="/profile" render={(props) => {
              auth.isAuthenticated().then(response => {
                  console.log('response', response);
                  return (
                    <Profile auth={auth} {...props}/>
                  )
                }).catch(response => {
                  console.log('catch response', response);
                  return (
                    <Profile auth={auth} {...props} />
                  )
                })
              }
            } /> */}
            <Route exact path="/profile" render={props => (
              <Profile auth={auth} {...props}/>
            )}/>
            <Route exact path="/dashboard" render={(props) => <Dashboard auth={auth} {...props}/> } />
        <Footer/>
      </div>
    );
  }
}

export default App;
