import React from "react";
import Upload from "./Upload";
import "./Upload.css";
import LoggedinNavbar from "../LoggedinNavbar";

const UploadPage = () => {
  return (
    <div>
      <LoggedinNavbar />
      <div className='container grid-container'>
        <Upload />
      </div>
    </div>
  );
};

export default UploadPage;
