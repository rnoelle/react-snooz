import axios from 'axios';
import store from '../store';
import apiUrl from './apiUrl';

import { getUser } from './userApi';

export function postCategory(category) {
  axios.post(`${apiUrl}categories`, {category: category}).then(response => {
    getUser();
    return response.status;
  }).catch(err => {
    console.log(err);
    return err;
  })
}

export function editCategory(oldName, edit) {
  axios.put(`${apiUrl}categories`, { edit, oldName }).then(response => {
    getUser();
    return response.status;
  }).catch(err => {
    console.log(err);
    return err;
  })
}

export function deleteCategory(category) {
  axios.delete(`${apiUrl}categories/${category}`).then(response => {
    getUser();
    return response.status;
  }).catch(err => {
    console.log(err);
    return err;
  })
}
