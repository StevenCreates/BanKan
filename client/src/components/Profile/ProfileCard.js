import React, { useRef, useState, useEffect } from "react";
import { useUpdateProfile } from "../hooks/ProfileHook";
import S3 from "react-aws-s3";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";

function ProfileCard() {
  const [profile, setProfile] = useState([]);
  const [fileinfo, setFileInfo] = useState({});
  const fileInput = useRef();

  const handleClick = event => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;
    const config = {};
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, newFileName).then(data => {
      setFileInfo(data);
      console.log(data);
    });
  };

  const updateProfile = () => {
    console.log(inputs);
    fetch("/api/profile/newprofile/", {
      method: "POST",
      body: JSON.stringify(inputs)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfile(data);
      })
      .catch(err => console.log(err));
  };

  const { inputs, handleInputChange, handleSubmit } = useUpdateProfile(
    updateProfile
  );

  useEffect(() => {
    updateProfile();
  }, []);

  return (
    <div>
      <HomeNavbar />
      <div className='login-container'>
        <form onSubmit={handleClick}>
          <p className='login-text'>Login</p>
          <div>
            <input
              ref={fileInput}
              placeholder='Avatar'
              type='file'
              name='Avatar'
              onChange={handleInputChange}
              value={inputs.Avatar}
            />
          </div>
          <div>
            <input
              placeholder='About'
              type='text'
              name='About'
              onChange={handleInputChange}
              value={inputs.about}
              required
            />
          </div>

          <button onSubmit={handleSubmit} type='submit'>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileCard;
