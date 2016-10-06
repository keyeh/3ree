import React, {PropTypes, Component} from 'react';
import EventItem from './EventItem';

export default class EventTicker extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired
  };

  render() {
    const { events, userId, actions } = this.props;

    let cumulative = events.reduce((x, event) =>  event.value + x, 0);
    let average = (events.length > 0) ? Math.round(cumulative/events.length) : 0;

    return (
      <section className='Pulse-eventList'>
        <div className='Pulse-eventList-summary'>
          <span>Other Events</span>
          <span className='val'>{events.length}</span>
          <span>Avg.</span>
          <span className='val'>{average}</span>
          <span>Cum.</span>
          <span className='val'>{cumulative}</span>
        </div>
        <div className='Pulse-eventList-list'>
          <ul>
            {events.slice(0,this.props.length).map((event, key) =>
              <EventItem key={key} row={key} id={event.id} event={event} editable={this.props.userId == event.userId} />
            )}
          </ul>
        </div>
      </section>
    );
  }
}