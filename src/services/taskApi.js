import axios from 'axios';
import store from '../store';
import apiUrl from './apiUrl';

import { dispatchGetTasks,
        dispatchEditTask,
        dispatchRemoveTask
      } from '../ducks/tasks';

export function getTasks() {
  let promise = axios.get(apiUrl+`tasks`).then(response => {
    return response.data
  });
  store.dispatch( dispatchGetTasks(promise) );
}

export function postTask(task) {
  task.category = task.category.toLowerCase();
  return axios.post(apiUrl+'tasks', task).then(response => {
    getTasks();
  })
}

export function removeTask(id) {
  let promise = axios.delete(apiUrl+`tasks/${id}`).then(response => {
    return id;
  }).catch(err => {
    return err;
  })
  store.dispatch( dispatchRemoveTask(promise) );
}

export function editTask(id, update) {
  let promise = axios.patch(`${apiUrl}tasks/${id}`, update).then(response => {
    return response.data;
  })
  store.dispatch( dispatchEditTask(promise) );
}

export function snooze(toDo) {
  return axios.post(`${apiUrl}snooze/${toDo._id}`).then(response => {
    console.log(response);
    return response;
  })
}
