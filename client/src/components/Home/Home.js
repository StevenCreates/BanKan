import React from "react";
import HomeNavbar from "../HomeNavbar";

function Home() {
  return (
    <div>
      <HomeNavbar />
      <div className='home-container'>
        <div className='container-items'>1</div>
        <div class='container-items'>
          <h1 className='home-title'>
            <span className='home-text'>BanKan</span>{" "}
          </h1>
        </div>
        <div class='container-items'>3</div>
        <div class='container-items'>4</div>
      </div>
    </div>
  );
}

export default Home;
