import React, { useContext, useState } from "react";
import { useUpdateProfile } from "../hooks/ProfileHook";
import { RootContext } from "../../context/RootContext";

function ProfileCard() {
  const { userState } = useContext(RootContext);
  const [show, toggleShow] = useState(false);
  const [profile, setProfile] = useState([]);

  const updateProfile = () => {
    let body = {
      id: userState.id,
      about: inputs.about,
      name: userState.name
    };
    fetch("/api/profile/newprofile/", {
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

  const { inputs, handleInputChange, handleSubmit } = useUpdateProfile(
    updateProfile
  );

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>Update About Me</button>
      {show && (
        <div className='upload-profile'>
          {/* onSubmit={handleClick} add back if needed */}
          <form onSubmit={handleSubmit}>
            <p className='update-profile-style'>Update Profile</p>
            <div>
              <input
                placeholder='About'
                type='text'
                name='about'
                onChange={handleInputChange}
                value={inputs.about}
                required
              />
            </div>

            <button type='submit'>Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
