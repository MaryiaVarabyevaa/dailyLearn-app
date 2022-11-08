import {createStore, combineReducers} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userReducer} from './UserReducer';
import {cardReducer} from "./CardReducer";

const rootReducer = combineReducers({
    userReducer,
    cardReducer
});

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);