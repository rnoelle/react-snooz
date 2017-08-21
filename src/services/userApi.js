import axios from 'axios';
import store from '../store';
import apiUrl from './apiUrl';

import {
  dispatchGetUser
} from '../ducks/users';

export function getUser() {
  let promise = axios.get(apiUrl + 'user').then(response => {
    console.log('incoming user', response);
    return response.data;
  }).catch(err => {
    console.log(err);
    return err
  })
  store.dispatch( dispatchGetUser(promise) )
}

export function editUser(property, edit) {
  axios.patch(`${apiUrl}user`, {[property.toLowerCase()]: edit}).then(response => {
    console.log(response);
    getUser();
  })
}
