import axios from 'axios';

class Auth {

  constructor() {
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    return axios.get('/auth/isAuthenticated').then(response => {
      // if (response.status === 200) {
      //   return true;
      // } else {
      //   return false
      // }
      return true;
   })
  }


}

export default Auth;
