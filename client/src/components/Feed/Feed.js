import React from "react";
import LoggedinNavbar from "../LoggedinNavbar";
import FeedPage from "./FeedPage";
import Footer from "../Footer";

function Feed() {
  return (
    <>
      <LoggedinNavbar />
      <FeedPage />
      <Footer />
    </>
  );
}

export default Feed;
