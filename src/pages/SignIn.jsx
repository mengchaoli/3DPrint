import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../store/auth-context';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSwitchAuthMode = (e) => {
    e.preventDefault();
    setIsSignIn((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const url = isSignIn ? 'auth/signin' : '/auth/signup';

    axios
      .post(url, {
        email,
        password,
      })
      .then((res) => {
        const expirationTime = new Date(
          new Date().getTime() + +res.data.expiresIn * 1000
        );
        authCtx.login(res.data.accessToken, expirationTime.toISOString());
        if (!isSignIn) {
          navigate('/on-board');
        } else {
          // TODO
          navigate('/home');
        }
      })
      .catch((err) => {
        passwordRef.current.value = '';
        // make sure the error is from response, not from above .then
        if (err.response) {
          setErrorMessage(err.response.data.message);
        }
      });
  };

  return (
    <div className='signin-wrapper'>
      <form className='center signin-form'>
        <div className='form__header'>
          {isSignIn ? 'Sign In' : 'Creat An Account'}
        </div>
        <div className='form__row'>
          <label htmlFor='email' className='bold'>
            Email
          </label>
          <input type='text' ref={emailRef} />
        </div>
        <div className='form__row'>
          <label htmlFor='password' className='bold'>
            Password
          </label>
          <input type='password' ref={passwordRef} />
        </div>
        <button className='form__action-btn center' onClick={handleSubmit}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <button className='center form__toggle' onClick={handleSwitchAuthMode}>
          {isSignIn ? 'Creat new account' : 'Sign in with existing account'}
        </button>
        {errorMessage ? <p className='error'>{errorMessage}</p> : ''}
      </form>
    </div>
  );
};

export default SignIn;
