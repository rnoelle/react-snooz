import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import tasks from './ducks/tasks';
import users from './ducks/users';

const initialState = {
  tasks: []
}

const reducers = combineReducers({
  tasks,
  users
})

export default createStore(reducers, initialState, applyMiddleware(promiseMiddleware()))
