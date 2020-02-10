import React, { useContext } from "react";
import { Link } from "react-router-dom";

function LoggedinNavbar() {
  return (
    <div className='nav-bar'>
      <div className='nav-link'>
        <Link className='nav-usable nav-left' to='/profile'>
          Profile
        </Link>
        <Link className='nav-usable ' to='/feed'>
          Feed
        </Link>
      </div>
      <div className='nav-link'></div>
      <Link className='nav-link' to='/'>
        <span className='bankan-nav'>BanKan</span>
      </Link>
      <div className='nav-link'></div>
      <div className='nav-link'>
        <Link className='nav-usable' to='/upload'>
          Upload
        </Link>
        <Link className='nav-usable nav-right' to='/logout'>
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default LoggedinNavbar;
