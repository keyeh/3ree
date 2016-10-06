import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PulseApp from './containers/PulseApp';
import MyEvents from './containers/MyEvents';
import Login from './containers/Login';
import OtherEvents from './containers/OtherEvents';
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.pulseApp.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})



export default (
  <Route path='/' component={PulseApp}>
    <IndexRoute components={{myEvents: MyEvents, otherEvents: OtherEvents}} />
    <Route path='my-events' component={UserIsAuthenticated(MyEvents)} />
    <Route path='login' component={Login} />
    <Route path='other-events' components={{otherEvents: OtherEvents}} />
  </Route>
);