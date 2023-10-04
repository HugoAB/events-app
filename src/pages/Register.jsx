import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

function Register() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.register}>
        <div className={styles.formField}>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" name="name" id="name" />
          </label>
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" id="email" />
          </label>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password" id="password" />
          </label>
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account?
        <Link to="/sign-in">Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
