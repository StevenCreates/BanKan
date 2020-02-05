// RootContext.js
import React, { useEffect, useState } from "react";
export const RootContext = React.createContext();

export default ({ children }) => {
  const [userState, setUser] = useState({
    success: false,
    id: 0
  });

  const [authenticated, setAuthenticated] = useState({
    authenticated: false
  });

  useEffect(() => {
    window.localStorage.setItem("success", userState.success);
    window.localStorage.setItem("token", userState.token);
    window.localStorage.setItem("id", userState.id);
    window.localStorage.setItem("authenticated", authenticated.authenticated);
  }, [userState, authenticated]);

  const defaultContext = {
    userState,
    setUser,
    setAuthenticated,
    authenticated
  };
  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
