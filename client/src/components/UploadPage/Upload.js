import React, { useState, useRef, useContext } from "react";
import S3 from "react-aws-s3";
import { usePost } from "../hooks/PostHook";
import { RootContext } from "../../context/RootContext";
import { useHistory } from "react-router-dom";

export default function Upload() {
  const [fileinfo, setFileInfo] = useState({});
  const fileInput = useRef();
  const { userState } = useContext(RootContext);
  const [show, toggleShow] = useState(false);
  const [uploading, toggleUpload] = useState(false);

  let history = useHistory();

  // UPLOAD FUNCTION
  const handleClick = event => {
    event.preventDefault();
    toggleUpload(!uploading);
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;
    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      dirName: process.env.REACT_APP_DIR_NAME,
      accessKeyId: process.env.REACT_APP_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_ACCESS_KEY
    };
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, newFileName).then(data => {
      setFileInfo(data);
      console.log(data);
      if (data.status === 204) {
        toggleShow(!show);
      } else {
        console.log("fail");
      }
    });
  };

  // NEW POST
  const newPost = () => {
    console.log(userState);
    let body = {
      body: inputs.body,
      title: inputs.title,
      link: fileinfo.location,
      user: userState.name,
      profileid: userState.id,
      id: userState.id
    };

    fetch("/api/posts/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(theRedirect())
      .catch(err => console.log(err));
  };

  const theRedirect = () => {
    // here we use the useHistory hook to push the user to /feed if they login successfully
    history.push("/feed");
  };

  const { inputs, handleInputChange, handleSubmit } = usePost(newPost);

  // Here we render out the laout of the New Post page Steps to Post
  return (
    <>
      <div className='grid-option'>
        <div className='upload-title'>STEP: 1</div>
        <form className='upload-steps' onSubmit={handleClick}>
          <label>
            Upload file:
            <input type='file' ref={fileInput} accept='.mp3,audio/*' />
          </label>
          <br />
          <button type='submit'>Upload</button>
          {uploading && (
            <div>Uploading... Next step will show when successful</div>
          )}
        </form>
      </div>
      {/* Here is the dividing point between the Upload Steps */}
      {show && (
        <div className='grid-option'>
          <div className='upload-title'>LAST STEP</div>
          <form onSubmit={handleSubmit} className='upload-steps'>
            <input
              placeholder='Title'
              type='text'
              name='title'
              id='title'
              onChange={handleInputChange}
              value={inputs.title}
            />
            <textarea
              placeholder='About'
              type='text'
              name='body'
              id='body'
              value={inputs.body}
              onChange={handleInputChange}
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      )}
    </>
  );
}
