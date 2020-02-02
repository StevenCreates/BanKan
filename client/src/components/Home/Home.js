import React from "react";
import HomeNavbar from "../HomeNavbar";

function Home() {
  return (
    <div>
      <HomeNavbar />
      <div className='home-container'>
        <div class='container-items'>
          <h1 class='home-title'>BanKan</h1>
          <h3>Sound Sharing</h3>
        </div>
        <div class='container-items'>2</div>
        <div class='container-items'>3</div>
        <div class='container-items'>4</div>
        <div class='container-items'>5</div>
        <div class='container-items'>6</div>
      </div>
    </div>
  );
}

export default Home;
