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
          {event.date}
        </p>
      </div>
    </div>
  );
}

export default EventItem;
