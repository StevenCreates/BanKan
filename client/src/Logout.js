import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";
function Logout() {
  const logout = () => {
    window.location.reload(true);
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <div>
      <HomeNavbar />
      See you again soon!
      <Link to='/home'>Home</Link>
    </div>
  );
}

export default Logout;
