import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import issues from './issues';



export default createStore(combineReducers({ issues }), applyMiddleware(thunk));