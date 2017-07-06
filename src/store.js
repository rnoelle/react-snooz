import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import tasks from './ducks/tasks';

const initialState = {
  tasks: [],
  user: null
}

export default createStore(tasks, initialState, applyMiddleware(promiseMiddleware()))
