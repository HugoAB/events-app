import React from 'react';
import styles from './EventItem.module.css';

function EventItem({ event }) {
  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={event.image} alt={event.title} />
      </div>
      <div>
        <p className={styles.title}>{event.title}</p>
        <p className={styles.location}>
          <span>Location: </span>
          {event.location}
        </p>
        <p className={styles.date}>
          <span>Date: </span>
          {new Date(event.dateTime).toLocaleDateString()}
        </p>
        <p className={styles.date}>
          <span>Time: </span>
          {`${new Date(event.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} hs`}
        </p>
      </div>
    </div>
  );
}

export default EventItem;
