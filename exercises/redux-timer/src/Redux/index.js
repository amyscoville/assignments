import { combineReducers, createStore } from 'redux';
import timer from './timer.js';

const rootReducer = combineReducers({ timer });

export default createStore(rootReducer);