import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import AsyncBar from '../components/AsyncBar';

import * as PulseActions from '../actions/PulseActions';

class PulseApp extends Component {
  static propTypes = {
    isWorking: React.PropTypes.bool,
    error: React.PropTypes.any,
  };

  render() {
    let actions = { 
      editEvent: this.props.editEvent, 
      deleteEvent: this.props.deleteEvent
    };

    return (
      <div className="Pulse-Container">
        <Header/>
        <AsyncBar isWorking={this.props.isWorking} error={this.props.error} />
        {this.props.children}
      </div>
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    userId: state.user.name,
    isWorking: state.pulseApp.isWorking,
    error: state.pulseApp.error
  })
)(PulseApp);
