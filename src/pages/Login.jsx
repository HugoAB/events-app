import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/events');
  }, [user, loading]);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.login}>
        <div className={styles.formField}>
          <label htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              name="email"
              id="email"
              onChange={changeEmailHandler}
              value={email}
            />
          </label>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              onChange={changePasswordHandler}
              value={password}
            />
          </label>
        </div>
        <button type="submit" onClick={() => logInWithEmailAndPassword(email, password)}>Sign In</button>
        <button type="submit" onClick={signInWithGoogle}>Login with Google</button>
      </div>
      <p>
        Do not have an account?
        <Link to="/sign-up">Create now</Link>
      </p>
    </div>
  );
}

export default Login;
