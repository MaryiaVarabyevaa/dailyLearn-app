import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {userReducer} from './UserReducer';

export const store = createStore(userReducer, composeWithDevTools());