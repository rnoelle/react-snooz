const GET_TASKS = 'GET_TASKS',
      // GET_TASKS_PENDING = 'GET_TASKS_PENDING',
      GET_TASKS_FULFILLED = 'GET_TASKS_FULFILLED';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_TASKS_FULFILLED:
      return Object.assign({}, state, {tasks: action.payload})
    default: return state;

  }
}

export function dispatchGetTasks(promise) {
  return {
    type: GET_TASKS,
    payload: promise
  }
}
