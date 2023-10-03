import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const hamburgerMenuClasses = showMenu
    ? `${styles.hamburger} ${styles.hamburgerActive}`
    : `${styles.hamburger}`;

  const navbarClasses = showMenu
    ? `${styles.navbar} ${styles.navbarActive}`
    : `${styles.navbar}`;

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>Amazing Events</h1>
      </Link>
      <nav className={navbarClasses}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/events">Our Events</Link>
          <Link to="/new-event">Add New Event</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </nav>
      <button type="button" className={hamburgerMenuClasses} onClick={showMenuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;
