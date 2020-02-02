import React, { useEffect, useState } from "react";
import "./Feed.css";
import LoggedinNavbar from "../LoggedinNavbar";
import { Link } from "react-router-dom";

function Feed() {
  const [post, setPost] = useState([]);

  // this .fetch gets all of the stored posts
  const loadPosts = () => {
    fetch("/api/posts/oldpost", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPost(data);
      })
      .catch(err => console.log(err));
  };

  //this waits until the window has loaded to run the Load Post function
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <LoggedinNavbar />
      <div className='feed-container'>
        <div>Feed</div>
        {/* Here we are mapping the data we recieve from the .fetch into a feed card */}
        {post.map(post => (
          <div className='feed-card'>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
            <div>Creator: {post.user}</div>
            <a href={post.link}>Check It Out</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
