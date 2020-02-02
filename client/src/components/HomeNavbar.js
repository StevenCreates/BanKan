import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RootContext } from "../context/RootContext";

function HomeNavbar() {
  const { userState } = useContext(RootContext);

  return (
    <div className='nav-bar'>
      <div className='nav-link'>
        <Link className='nav-usable nav-left' to='/login'>
          Login
        </Link>
        <Link className='nav-usable' to='/createuser'>
          New User
        </Link>
      </div>
      <div className='nav-link'></div>
      <Link className='nav-link' to='/'>
        <span className='bankan-nav'>BanKan</span>
      </Link>
      <div className='nav-link'></div>
      <div className='nav-link'>
        <Link className='nav-usable' to='/Upload'>
          Feed
        </Link>
        <Link className='nav-usable nav-right' to='/upload'>
          New User
        </Link>
      </div>
    </div>
  );
}

export default HomeNavbar;
