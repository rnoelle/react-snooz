const GET_USER = 'GET_USER';

export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {user: action.payload})
    default:
      return state;
  }
}

export function dispatchGetUser(user) {
  return {
    type: GET_USER,
    payload: user
  }
}
