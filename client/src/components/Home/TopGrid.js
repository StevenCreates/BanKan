import React from "react";
import "./TopGrid.css";

export default function TopGrid() {
  return (
    <div>
      <div className='topgrid-container'>
        <div className='container-items fun-text'>
          <p className='text-one'>UPLOAD</p>
          <p className='text-two'>SHARE</p>
          <p className='text-one'>YOUR</p>
          <p className='text-two'>THE</p>
          <p className='text-one'>MUSIC</p>
          <p className='text-two'>SOUND</p>
        </div>
        <div className='container-items'>
          <h1 className='home-title'>
            <p className='home-text'>BanKan</p>
            <p className='home-small'>Sound Sharing</p>
          </h1>
        </div>
      </div>
    </div>
  );
}
