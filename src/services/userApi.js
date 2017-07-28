import axios from 'axios';
import store from '../store';
import apiUrl from './apiUrl';

import {
  dispatchGetUser
} from '../ducks/users';

export function getUser() {
  console.log('getting user');
  let promise = axios.get(apiUrl + 'user').then(response => {
    console.log('incoming user', response);
    return response.data;
  }).catch(err => {
    console.log(err);
  })
  store.dispatch( dispatchGetUser(promise) )
}
