import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PulseApp from './containers/PulseApp';
import MyEvents from './containers/MyEvents';
import Login from './containers/Login';
import Welcome from './components/Welcome';
import AllEvents from './containers/AllEvents';
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})



export default (
  <Route path='/' component={PulseApp}>
    <IndexRoute component={Welcome} />
    <Route path='my-events' component={UserIsAuthenticated(MyEvents)} />
    <Route path='login' component={Login} />
    <Route path='all-events' component={AllEvents} />
  </Route>
);