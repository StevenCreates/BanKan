import React, { useEffect, useState, useContext } from "react";
import LoggedinNavbar from "../LoggedinNavbar";
import Footer from "../Footer";
import { RootContext } from "../../context/RootContext";
import "../Profile/Profile.css";

function UserProfile() {
  const { usersProfile } = useContext(RootContext);
  const [userPost, setUserPost] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  const loadPosts = () => {
    console.log({ usersProfile });
    let fuckthis = { usersProfile };
    let fuckthistoo = fuckthis.usersProfile;
    console.log(fuckthistoo);
    let body = {
      id: fuckthistoo
    };
    console.log(body);
    fetch("/api/posts/findme/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserPost(data);
      })
      .catch(err => console.log(err));
  };

  const loadAbout = () => {
    let fuckthis = { usersProfile };
    let fuckthistoo = fuckthis.usersProfile;
    console.log(fuckthistoo);
    let body = {
      id: fuckthistoo
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
        console.log(data);
        setUserProfile(data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadPosts();
    loadAbout();
  }, []);

  return (
    <div>
      <LoggedinNavbar />
      <div className='profile-container'>
        <div className='profile-option about-container'>
          {userProfile.map(userProfile => (
            <>
              <div className='name-current'>{usersProfile.name}</div>
              <div className='about-info'>{userProfile.about}</div>
            </>
          ))}
        </div>
        <div className='profile-option'>
          <p className='my-post-text'>Users Posts</p>
          {userPost.map(userPost => (
            <div className='profile-posts'>
              <div>Creator: {userPost.user}</div>
              <div>Title: {userPost.title}</div>
              <a href={userPost.link}>Link</a>
              <div>Body: {userPost.body}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
