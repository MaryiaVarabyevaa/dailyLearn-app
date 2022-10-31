import {createStore} from "redux";

const defaultState = {
  isAuth: false,
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, isAuth: true}
    default:
      return state;
  }
}
export const userStore = createStore(reducer);