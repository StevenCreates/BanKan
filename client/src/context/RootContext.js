// RootContext.js
import React, { useEffect, useState } from "react";
export const RootContext = React.createContext();

export default ({ children }) => {
  const [userState, setUser] = useState({
    success: false,
    id: 0
  });

  useEffect(() => {
    window.localStorage.setItem("success", userState.success);
    window.localStorage.setItem("token", userState.token);
    window.localStorage.setItem("id", userState.id);
  }, [userState]);

  const defaultContext = {
    userState,
    setUser
  };
  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
