import React from "react";
import { Link } from "react-router-dom";

function LoggedinNavbar() {
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
    </div>
  );
}

export default LoggedinNavbar;
