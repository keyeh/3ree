import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import DevTools from '../containers/devTools';

import rootReducer from './rootReducer';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware, routerMiddleware(browserHistory)),
  DevTools.instrument()
);

const store = createStore(rootReducer, initialState, enhancer);

if (module.hot) {
  module.hot.accept('../reducers', () =>
    store.replaceReducer(rootReducer)
  );
};

export default store;
