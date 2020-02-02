import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RootContext } from "../context/RootContext";

function LoggedinNavbar() {
  const { userState } = useContext(RootContext);

  return (
    <div className='nav-bar'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/profile'>
        Profile
      </Link>
      <Link className='nav-link' to='/upload'>
        New Post
      </Link>
      <Link className='nav-link' to='/feed'>
        Feed
      </Link>
      <Link className='nav-link' to='/logout'>
        Logout
      </Link>
      <div className='nav-link'>Logged In As:{userState.name}</div>
    </div>
  );
}

export default LoggedinNavbar;
