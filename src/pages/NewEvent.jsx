import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './NewEvent.module.css';
import { db, auth } from '../firebase';

function NewEvent() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const dateTimeChangeHandler = (e) => {
    setDateTime(e.target.value);
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };

  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        title,
        location,
        dateTime,
        image,
      });
      console.log(docRef.id);
      setTitle('');
      setLocation('');
      setDateTime('');
      setImage('');
      navigate('/events');
      navigate(0);
    } catch (error) {
      //
    }
  };

  const noUserStyles = {
    textAlign: 'center',
    marginTop: '80px',
    fontSize: '16px',
  };

  if (!user) {
    return (
      <div style={noUserStyles}>
        <p>You must be logged in to post an event!</p>
        <p>
          <Link to="/sign-in">Click here</Link>
          <span> to Sign in</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={addEvent} className={styles.newEvent}>
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
        <span>Date and Time</span>
        <input
          type="datetime-local"
          id="date"
          value={dateTime}
          onChange={dateTimeChangeHandler}
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
