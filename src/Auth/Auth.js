import axios from 'axios';
import store from '../store';
import history from '../history';

class Auth {


  userProfile = {};

  constructor() {
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  getProfile() {
      return axios.get('/api/user').then(response => {
        console.log('user response', response);
        this.userProfile = response.data;
        return response.data;
      });
  }

  logout() {
    history.replace('/home');
  }

  isAuthenticated() {
    return axios.get('/auth/isAuthenticated').then(response => {
      return response.status
    })
  }


}

export default Auth;
