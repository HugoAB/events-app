import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../firebase';
import styles from './Navbar.module.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const logoutFunc = () => {
    logout();
    navigate('/sign-in');
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
            <Link to="/events" onClick={closeMenu}>All Events</Link>
          </li>
          <li>
            <Link to="/new-event" onClick={closeMenu}>Add New Event</Link>
          </li>
          <li>
            {!user ? (
              <Link to="/sign-in" onClick={closeMenu}>Sign In</Link>
            ) : (
              <button className={styles.logoutBtn} type="button" onClick={logoutFunc}>Logout</button>
            )}
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
