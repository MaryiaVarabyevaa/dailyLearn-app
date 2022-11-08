const ADD_USER = 'ADD_USER'
const defaultState = {
  isAuth: true,
  user: [],
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, isAuth: true, user: [...state.user, action.payload]};
    default:
      return state;
  }
}
export const addUserAction = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}