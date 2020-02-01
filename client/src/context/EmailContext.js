// RootContext.js
import React, { useEffect, useState } from "react";
export const EmailContext = React.createContext();
export default ({ children }) => {
  const emailAuth = window.localStorage.getItem("email") || null;
  const [email, setEmail] = useState(emailAuth);
  useEffect(() => {
    window.localStorage.setItem("email", email);
  }, [email]);
  const defaultContext = {
    setEmail
  };
  return (
    <EmailContext.Provider value={defaultContext}>
      {children}
    </EmailContext.Provider>
  );
};
