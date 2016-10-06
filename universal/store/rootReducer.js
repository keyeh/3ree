import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import pulseApp from '../reducers/pulse';
import user from '../reducers/user';

const rootReducer = combineReducers({
    routing: routerReducer,
    pulseApp,
    user
  });

export default rootReducer