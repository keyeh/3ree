import React, { PropTypes, Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div style={{marginLeft: 150}}>
        <h2>Major Changes</h2>
        <br/>
        <p>
        	HMR for reducers is broken<br/>
        	HMR is broken for everything (I think, at least on my machine)<br/>
        	You need to be logged in to edit events.<br/>
        	userID is set using the name you log in with<br/>
        	Render children instead of specific components in PulseApp.js<br/>
        	Refactor rootReducer/combinereducer<br/>
        </p>
      </div>
    );
  }
}