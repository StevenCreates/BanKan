import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AboutUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const ref = useRef();
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <div>
      <div className='grid-option'>
        <form ref={ref} onSubmit={handleSubmit} className='about-upload'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div className='grid-option'>
        <div>
          <Link className='content-link' to='/userscontent'>
            Link
          </Link>
          Title: {title}
          Description: {description}
        </div>
      </div>
    </div>
  );
};

export default AboutUpload;
