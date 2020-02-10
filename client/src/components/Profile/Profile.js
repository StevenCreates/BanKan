import React, { useEffect, useState, useContext } from "react";
import LoggedinNavbar from "../LoggedinNavbar";
import Footer from "../Footer";
import { RootContext } from "../../context/RootContext";
import "./Profile.css";
import ProfileCard from "./ProfileCard";

function Profile() {
  const { userState } = useContext(RootContext);
  const [post, setPost] = useState([]);
  const [profile, setProfile] = useState([]);

  const loadPosts = () => {
    let body = {
      id: userState.id
    };
    fetch("/api/posts/findme/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        setPost(data);
      })
      .catch(err => console.log(err));
  };

  const loadAbout = () => {
    let body = {
      id: userState.id
    };
    fetch("/api/profile/findme/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      })
      .catch(err => console.log(err));
  };

  //this waits until the window has loaded to run the Load Post function
  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    loadAbout();
  }, [profile]);

  return (
    <div>
      <LoggedinNavbar />
      <div className='profile-container'>
        <div className='profile-option about-container'>
          <div className='name-current'>{userState.name}</div>
          {profile.map(profile => (
            <div className='about-info'>{profile.about}</div>
          ))}
          <ProfileCard />
        </div>
        {/* Here we are mapping the data we recieve from the .fetch into a feed card */}
        <div className='profile-option'>
          <p className='my-post-text'>My Posts</p>
          {post.map(post => (
            <div className='profile-posts'>
              <div>Creator: {post.user}</div>
              <div>Title: {post.title}</div>
              <a href={post.link}>Link</a>
              <div>Body: {post.body}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
