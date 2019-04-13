import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import prayerReducer from './reducers/prayerReducer';


export default createStore(combineReducers({userReducer, prayerReducer}), applyMiddleware(promiseMiddleware));