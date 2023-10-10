import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewEvent.module.css';

function NewEvent({ addNewEvent }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      location,
      date: new Date(date),
      image,
    };
    addNewEvent(newEvent);
    setTitle('');
    setLocation('');
    setDate('');
    setImage('');
    navigate('/events');
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.newEvent}>
      <h2>Add a New Event!</h2>
      <label htmlFor="title">
        <span>Title</span>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
        />
      </label>
      <label htmlFor="location">
        <span>Location</span>
        <input
          type="text"
          id="location"
          value={location}
          onChange={locationChangeHandler}
        />
      </label>
      <label htmlFor="date">
        <span>Date</span>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={dateChangeHandler}
        />
      </label>
      <label htmlFor="image">
        <span>Image</span>
        <input
          type="text"
          id="image"
          value={image}
          onChange={imageChangeHandler}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default NewEvent;
