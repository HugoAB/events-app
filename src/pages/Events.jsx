import React from 'react';
import EventItem from '../components/EventItem';
import styles from './Events.module.css';

function Events({ events }) {
  return (
    <div className={styles.events}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Events;
