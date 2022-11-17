const ADD_USER = 'ADD_USER';
const RESTORE_FROM_STORAGE = 'RESTORE_FROM_STORAGE'
const defaultState = {
  isAuth: true
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      localStorage.setItem('isAuth', 'true');
      return {...state, isAuth: true};
    case RESTORE_FROM_STORAGE:
      const isAuthUser = !!localStorage.getItem('isAuth');
      return {...state, isAuth: isAuthUser? isAuthUser : false};
    default:
      return state;
  }
}
export const addUserAction = () => {
  return {
    type: ADD_USER,
  }
}
export const restoreFromStorageAction = () => {
  return {
    type: RESTORE_FROM_STORAGE,
  }
}