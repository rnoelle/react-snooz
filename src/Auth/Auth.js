import auth0 from 'auth0-js';
import store from '../store';
import history from '../history';
import { AUTH_CONFIG } from './auth0-config';

import { dispatchGetUser } from '../ducks/users';

export default class Auth {


  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
  }

  getProfile(cb) {
      cb();
  }

  logout() {

    history.replace('/home');
  }

  isAuthenticated() {

  }


}
