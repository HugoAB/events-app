import React from 'react';
import styles from './EventItem.module.css';

function EventItem({ event }) {
  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={event.imageUrl} alt={event.title} />
      </div>
      <p className={styles.title}>{event.title}</p>
      <p className={styles.location}>{event.location}</p>
      <p className={styles.date}>{event.date}</p>
    </div>
  );
}

export default EventItem;
