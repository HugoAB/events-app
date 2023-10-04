import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/events" onClick={closeMenu}>Our Events</Link>
          </li>
          <li>
            <Link to="/new-event" onClick={closeMenu}>Add New Event</Link>
          </li>
          <li>
            <Link to="/sign-in" onClick={closeMenu}>Sign In</Link>
          </li>
        </ul>
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
