import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { usePost } from "../hooks/PostHook";

const AboutUpload = () => {
  const newPost = () => {
    fetch("/api/posts/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  const { inputs, handleInputChange, handleSubmit } = usePost(newPost);

  return (
    <>
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
};

export default AboutUpload;
