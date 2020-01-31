import React from "react";
import Upload from "./Upload";
import AboutUpload from "./AboutUpload";
import "./Upload.css";
import LoggedinNavbar from "../LoggedinNavbar";

const UploadPage = () => {
  return (
    <div>
      <LoggedinNavbar />
      <div className='container grid-container'>
        <Upload />
        <AboutUpload />
      </div>
    </div>
  );
};

export default UploadPage;
