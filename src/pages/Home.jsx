import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Welcome!</h1>
      <p>Browse all our amazing events!</p>
      <Link to="/events">See Our Available Events</Link>
    </section>
  );
}

export default Home;
