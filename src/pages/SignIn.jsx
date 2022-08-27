import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

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

    const url = isSignIn ? "auth/signin" : "/auth/signup";

    axios
      .post(url, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/on-board");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signin-wrapper">
      <form className="center signin-form">
        <div className="form__header">
          {isSignIn ? "Sign In" : "Creat An Account"}
        </div>
        <div className="form__row">
          <label htmlFor="email" className="bold">
            Email
          </label>
          <input type="text" ref={emailRef} />
        </div>
        <div className="form__row">
          <label htmlFor="password" className="bold">
            Password
          </label>
          <input type="password" ref={passwordRef} />
        </div>
        <button className="form__action-btn center" onClick={handleSubmit}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <button className="center form__toggle" onClick={handleSwitchAuthMode}>
          {isSignIn ? "Creat new account" : "Sign in with existing account"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
