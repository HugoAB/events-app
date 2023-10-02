import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>Amazing Events</h1>
      </Link>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/events">Our Events</Link>
        <Link to="/new-event">Add New Event</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </header>
  );
}

export default Navbar;
