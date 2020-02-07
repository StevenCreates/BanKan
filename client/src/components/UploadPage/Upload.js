import React, { useState, useRef, useContext } from "react";
import S3 from "react-aws-s3";
import { usePost } from "../hooks/PostHook";
import { RootContext } from "../../context/RootContext";

export default function Upload() {
  // here we set state to grab the file info so we can reference its location later in the feeds (profile and main feed)
  // we do this by using the useRef hook to grab the current state of the input[file]
  const [fileinfo, setFileInfo] = useState({});
  const fileInput = useRef();

  // this is grabbing the context from our RootContext.js and grabbing the userState function
  // we are doing this so we can pull the current logged in user info to put in the information in the post
  const { userState } = useContext(RootContext);

  // Here is the function that uploads the file upon submit
  const handleClick = event => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;
    const config = {};
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, newFileName).then(data => {
      setFileInfo(data);
      console.log(data);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    });
  };

  // Here is the function that posts the data to mongodb then we pull this data into our profile and feed pages
  const newPost = () => {
    let body = {
      body: inputs.body,
      title: inputs.title,
      link: fileinfo.location,
      user: userState.name,
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
      .catch(err => console.log(err));
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
        </form>
      </div>
      {/* Here is the dividing point between the Upload Steps */}
      <div className='grid-option'>
        <div className='upload-title'>STEP: 2</div>
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
    </>
  );
}
