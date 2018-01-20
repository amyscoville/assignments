import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import countries from './countries';
import country from './country';

const rootReducer = combineReducers({ countries, country });

export default createStore(
    rootReducer,
    applyMiddleware(thunk));




