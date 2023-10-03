import React from 'react';
import styles from './Login.module.css';

function Login() {
  return (
    <form className={styles.login}>
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
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Login;
