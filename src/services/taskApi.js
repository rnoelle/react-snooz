import axios from 'axios';
import store from '../store'
import apiUrl from './apiUrl';

import { dispatchGetTasks } from '../ducks/tasks';

export function postTask(task) {
  return axios.post(apiUrl+'tasks', task).then(response => {
    return response.status
  })
}

export function getTasks() {
  let promise = axios.get(apiUrl+`tasks?user_id=23`).then(response => {
    return response.data
  });
  store.dispatch( dispatchGetTasks(promise) );
}
