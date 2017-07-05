import axios from 'axios';
import apiUrl from './apiUrl';

export function postTask(task) {
  return axios.post(apiUrl+'/tasks', task).then(response => {
    return response.status
  })
}
