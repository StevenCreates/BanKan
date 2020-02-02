import React, { useState, useRef } from "react";
import S3 from "react-aws-s3";
// import { Link } from "react-router-dom";
// import S3 from "react-aws-s3";

export default function Upload() {
  const [fileinfo, setFileInfo] = useState({});
  const fileInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;
    const config = {
      //  insert config here
    };
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, newFileName).then(data => {
      setFileInfo(data);
      console.log(data);
    });
  };

  return (
    <div className='grid-option'>
      <div className='upload-title'>STEP: 1</div>
      <form className='upload-steps' onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type='file' ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
