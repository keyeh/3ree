import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';

import pulseApp from '../reducers';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const rootReducer = combineReducers({
  routing: routerReducer,
  pulseApp
});

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  routerMiddleware(browserHistory)
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;