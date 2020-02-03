import React, { useState, useRef, useContext } from "react";
import S3 from "react-aws-s3";
import { usePost } from "../hooks/PostHook";
import { RootContext } from "../../context/RootContext";

export default function Upload() {
  const [fileinfo, setFileInfo] = useState({});
  const fileInput = useRef();
  const { userState } = useContext(RootContext);

  // Here is the function that uploads the file upon submit
  const handleClick = event => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;

    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, newFileName).then(data => {
      setFileInfo(data);
      console.log(data);
    });
  };

  // Here is the function that posts the data to mongodb then is read on the feed page
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
            <input type='file' ref={fileInput} />
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
      {/* Here is the dividing point between the Upload Steps */}
      <div className='grid-option'>
        <div className='upload-title'>STEP: 2</div>
        <form onSubmit={handleSubmit} className='upload-steps'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            onChange={handleInputChange}
            value={inputs.title}
          />
          <label htmlFor='body'>Description</label>
          <input
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
