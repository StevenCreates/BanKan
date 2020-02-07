import React from "react";
import HomeNavbar from "../HomeNavbar";
import { useSignUpForm } from "../hooks/SignUpHook";
import "./CreateUser.css";
import Footer from "../Footer";

function CreateUser() {
  const onSignUp = () => {
    fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    console.log(inputs);
    console.log(`User Created! Name: ${inputs.name} Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(onSignUp);

  return (
    <div>
      <HomeNavbar />
      <div className='create-container'>
        <form onSubmit={handleSubmit}>
          <p className='create-text'>Create User</p>
          <div>
            <input
              placeholder='Name'
              type='text'
              name='name'
              onChange={handleInputChange}
              value={inputs.Name}
              required
            />
          </div>
          <div>
            <input
              placeholder='Email'
              type='email'
              name='email'
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
          </div>
          <div>
            <input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleInputChange}
              value={inputs.password1}
            />
          </div>
          <div>
            <input
              placeholder='Password Again'
              type='password'
              name='password2'
              onChange={handleInputChange}
              value={inputs.password2}
            />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateUser;
