import createHistory from 'history/lib/createMemoryHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistState } from 'redux-devtools';

import rootReducer from './rootReducer';
import DevTools from '../containers/devTools';

export default (req, initialState) => {
  
  let enhancer = compose(
    applyMiddleware(thunkMiddleware)
  );

  if (process.env.NODE_ENV !== 'production') {
    enhancer = compose(
      applyMiddleware(thunkMiddleware),
      DevTools.instrument()
    );
  }

  return createStore(rootReducer, initialState, enhancer);
};

    