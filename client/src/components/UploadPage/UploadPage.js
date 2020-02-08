import React from "react";
import Upload from "./Upload";
import Footer from "../Footer";
import "./Upload.css";
import LoggedinNavbar from "../LoggedinNavbar";

const UploadPage = () => {
  return (
    <div>
      <LoggedinNavbar />
      <div className='grid-container'>
        <Upload />
      </div>
      <Footer />
    </div>
  );
};

export default UploadPage;
