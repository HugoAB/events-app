import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../components/EventItem';
import styles from './Events.module.css';

function Events({ events }) {
  return (
    <>
      <h1 className={styles.title}>Available Events</h1>
      <p className={styles.newEventLink}>
        <Link to="/new-event">Click here </Link>
        to add an Event
      </p>
      <div className={styles.events}>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
      ))}
      </div>
    </>
  );
}

export default Events;
