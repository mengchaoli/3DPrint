import React, { useState } from "react";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const switchAuthModeHandler = (e) => {
    e.preventDefault();
    setIsSignIn((prevState) => !prevState);
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
          <input type="text" />
        </div>
        <div className="form__row">
          <label htmlFor="password" className="bold">
            Password
          </label>
          <input type="password" />
        </div>
        <button className="form__action-btn center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <button className="center form__toggle" onClick={switchAuthModeHandler}>
          {isSignIn ? "Creat new account" : "Sign in with existing account"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
