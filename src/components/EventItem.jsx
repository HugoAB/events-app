import React from 'react';
import styles from './EventItem.module.css';

function EventItem({ event }) {
  const eventObj = event.event;

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={eventObj.image} alt={eventObj.title} />
      </div>
      <div>
        <p className={styles.title}>{eventObj.title}</p>
        <p className={styles.location}>
          <span>Location: </span>
          {eventObj.location}
        </p>
        <p className={styles.date}>
          <span>Date: </span>
          {/* {new Date(event.date.seconds * 1000).toLocaleDateString('en-US')} */}
        </p>
      </div>
    </div>
  );
}

export default EventItem;
