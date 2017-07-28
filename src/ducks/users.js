const GET_USER = 'GET_USER';

export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {user: action.payload})
    default:
      return state;
  }
}

export function dispatchGetUser(promise) {
  return {
    type: GET_USER,
    payload: promise
  }
}
