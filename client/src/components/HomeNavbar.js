import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar() {
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
    </div>
  );
}

export default HomeNavbar;
