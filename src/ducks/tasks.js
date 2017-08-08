const GET_TASKS = 'GET_TASKS',
      EDIT_TASK = 'EDIT_TASK',
      EDIT_TASK_FULFILLED = 'EDIT_TASK_FULFILLED',
      REMOVE_TASK = 'REMOVE_TASK',
      REMOVE_TASK_FULFILLED = 'REMOVE_TASK_FULFILLED',
      // GET_TASKS_PENDING = 'GET_TASKS_PENDING',
      GET_TASKS_FULFILLED = 'GET_TASKS_FULFILLED';

export default function reducer(state = {}, action) {
  var newTasks,
      newTask,
      oldTask,
      newState;
  switch (action.type) {
    case GET_TASKS_FULFILLED:
      return Object.assign({}, state, {tasks: action.payload});
    case EDIT_TASK_FULFILLED:
      newTask = action.payload;
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === newTask.id) {
          oldTask = i;
        }
      }
      newTasks = [...state.tasks.slice(0, oldTask), newTask, ...state.tasks.slice(oldTask+1)]
      return Object.assign({}, state, {tasks: newTasks})
    case REMOVE_TASK_FULFILLED:
      newTasks = state.tasks.filter(el=>el.id!==action.payload);
      newState = Object.assign({}, state, {tasks: newTasks})
      return newState;
    default: return state;

  }
}

export function dispatchGetTasks(promise) {
  return {
    type: GET_TASKS,
    payload: promise
  }
}

export function dispatchEditTask(promise) {
  return {
    type: EDIT_TASK,
    payload: promise
  }
}

export function dispatchRemoveTask(promise) {
  return {
    type: REMOVE_TASK,
    payload: promise
  }
}
