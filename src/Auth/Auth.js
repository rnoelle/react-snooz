import axios from 'axios';
import apiUrl from '../services/apiUrl';

class Auth {

  constructor() {
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    return axios.get(`${apiUrl}isAuthenticated`).then(response => {
      if (response.status === 200) {
        return true;
      } else {
        return false
      }
   })
  }


}

export default Auth;
