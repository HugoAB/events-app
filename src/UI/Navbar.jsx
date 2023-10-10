import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
 collection, getDocs, query, where,
} from 'firebase/firestore';
import { auth, db, logout } from '../firebase';
import styles from './Navbar.module.css';
import userIcon from '../assets/user-icon.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchUsername = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (error) {
      console.error(error);
      console.log('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) fetchUsername();
  }, [user, loading]);

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
      <div>
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
        {user && (
          <div className={styles.userInfo}>
            <img src={userIcon} alt="user" />
            <p>{name}</p>
          </div>
        )}
      </div>
      <button type="button" className={hamburgerMenuClasses} onClick={showMenuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;
