import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RootContext } from "../context/RootContext";

function HomeNavbar() {
  const { userState } = useContext(RootContext);

  return (
    <div className='nav-bar'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/login'>
        Login
      </Link>
      <Link className='nav-link' to='/createuser'>
        New User
      </Link>
      <Link className='nav-link' to='/upload'>
        New Post
      </Link>
      <div>Logged In As:{userState.name}</div>
    </div>
  );
}

export default HomeNavbar;
