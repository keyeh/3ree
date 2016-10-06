import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import pulseApp from '../reducers/pulse';

const rootReducer = combineReducers({
    routing: routerReducer,
    pulseApp
  });

export default rootReducer