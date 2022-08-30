import React, { useState } from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [accessToken, setAccessToken] = useState(null);

  const isLoggedIn = !!accessToken;

  const loginHandler = (token) => {
    setAccessToken(token);
  };

  const logoutHandler = () => {
    setAccessToken(null);
  };

  const contextValue = {
    accessToken,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
