import axios from 'axios';

class Auth {

  constructor() {
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    return axios.get('/auth/isAuthenticated').then(response => {
      return response.status
    })
  }


}

export default Auth;
