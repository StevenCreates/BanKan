import React from "react";
import "./SecondGrid.css";

export default function SecondGrid() {
  return (
    <div>
      <div className='second-home-container'>
        <div className='second-option'>
          <i className='fal fa-digging'></i>
          <p>Create User</p>
        </div>
        <div className='second-option'>
          <i class='fal fa-upload'></i>
          <p>Upload</p>
        </div>
        <div className='second-option'>
          <i class='fal fa-mind-share'></i>
          <p>Share</p>
        </div>
        <div className='second-option'>
          <i class='fal fa-comments-alt'></i>
          <p>Discuss</p>
        </div>
        <div className='second-option'>
          <i class='fal fa-glass-cheers'></i>
          <p>PARTY!</p>
        </div>
      </div>
    </div>
  );
}
