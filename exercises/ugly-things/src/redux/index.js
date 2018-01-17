import { createStore, combineReducers } from 'redux';
import uglies from './uglies.js';

const rootReducer = (combineReducers({uglies}));

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
