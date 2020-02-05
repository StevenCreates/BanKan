import React, { useEffect, useState } from "react";
import LoggedinNavbar from "../LoggedinNavbar";
import Footer from "../Footer";

function Profile() {
  const [post, setPost] = useState([]);
  let id = { id: "5e3393491e1004801d8f500f" };
  // this .fetch gets all of the stored posts
  const loadPosts = () => {
    fetch("/api/posts/findme/", {
      method: "POST",
      body: JSON.stringify(id)
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
      <div className='profile-container'>
        <div>Profile</div>
        {/* Here we are mapping the data we recieve from the .fetch into a feed card */}
        {post.map(post => (
          <div className='profile-card'>
            <div>Creator: {post.user}</div>
            <div>Title: {post.title}</div>
            <a href={post.link}>Link</a>
            <div>Body: {post.body}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
