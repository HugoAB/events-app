import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaGoogle } from 'react-icons/fa';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase';
import styles from './Register.module.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      alert('Please enter name');
    }
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) {
      navigate('/events');
    }
  }, [user, loading]);

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.register}>
        <div className={styles.formField}>
          <label htmlFor="name">
            <span>Name</span>
            <input
              type="text"
              name="name"
              id="name"
              onChange={changeNameHandler}
              value={name}
            />
          </label>
        </div>
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
        <div className={styles.buttons}>
          <button type="submit" onClick={register}>Sign up</button>
          <button
            type="button"
            className={styles.registerGoogle}
            onClick={signInWithGoogle}
          >
            <FaGoogle />
            Register with Google
          </button>
        </div>
      </div>
      <p>
        Already have an account?
        <Link to="/sign-in">Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
