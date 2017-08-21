import axios from 'axios';
import store from '../store';
import apiUrl from './apiUrl';

import { getUser } from './userApi';

export function postCategory(category) {
  console.log(category);
  axios.post(`${apiUrl}categories`, {category: category}).then(response => {
    getUser()
    return response.status;
  }).catch(err => {
    console.log(err);
    return err;
  })

}
