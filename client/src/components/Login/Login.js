import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "../HomeNavbar";

function Login() {
  return (
    <div>
      <HomeNavbar />
      <Link className='nav-link' to='/upload'>
        Temp Upload Nav Link
      </Link>
    </div>
  );
}

export default Login;
