import React from "react";
import HomeNavbar from "../HomeNavbar";
import { useSignUpForm } from "../hooks/SignUpHook";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            onChange={handleInputChange}
            value={inputs.Name}
            required
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type='email'
            name='email'
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleInputChange}
            value={inputs.password1}
          />
        </div>
        <div>
          <label>Re-enter Password</label>
          <input
            type='password'
            name='password2'
            onChange={handleInputChange}
            value={inputs.password2}
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default CreateUser;
