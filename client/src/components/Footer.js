import React, { useContext } from "react";
import "./Footer.css";
import { RootContext } from "../context/RootContext";

export default function Footer() {
  const { userState } = useContext(RootContext);
  return (
    <div className='footer-container'>
      <div className='footer-option'>
        <a href='https://github.com/Tecdef/BanKan'>
          <i className='fab fa-github social-icon'></i>
        </a>
      </div>
      <div className='footer-option'></div>
      <div className='footer-option'>BanKan</div>
      <div className='footer-option'></div>
      <div className='footer-option'>
        <p className='logged-in-as'>Logged In As:{userState.name}</p>
      </div>
    </div>
  );
}
