import React from "react";
import HomeNavbar from "../HomeNavbar";
import { useLoginForm } from "../hooks/LoginHook";

function Login() {
  const onSignUp = () => {
    console.log(
      `User Created! Name: ${inputs.firstName} ${inputs.lastName} Email: ${inputs.email}`
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useLoginForm(onSignUp);

  return (
    <div>
      <HomeNavbar />
      <form onSubmit={handleSubmit}>
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
            name='password1'
            onChange={handleInputChange}
            value={inputs.password1}
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
