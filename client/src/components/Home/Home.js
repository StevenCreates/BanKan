import React from "react";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import TopGrid from "./TopGrid";
import SecondGrid from "./SecondGrid";

function Home() {
  return (
    <div className='full-height'>
      <HomeNavbar />
      <TopGrid />
      <SecondGrid />
      <Footer />
    </div>
  );
}

export default Home;
