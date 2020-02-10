import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./PostCard.css";

export default function FeedPage() {
  const [post, setPost] = useState([]);

  const loadPosts = () => {
    fetch("/api/posts/oldpost/", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPost(data);
      })
      .catch(err => console.log(err));
  };

  const onImageClick = id => {
    console.log(id);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className='feed-container'>
      {post.map(post => (
        <PostCard
          key={post.title}
          id={post.id}
          post={post}
          onImageClick={onImageClick}></PostCard>
      ))}
    </div>
  );
}
