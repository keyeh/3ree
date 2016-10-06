import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './rootReducer';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;


const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  routerMiddleware(browserHistory)
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;