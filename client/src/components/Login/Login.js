import React, { useState, useContext } from "react";
import HomeNavbar from "../HomeNavbar";
import { useLoginForm } from "../hooks/LoginHook";

function Login() {
  const [loggedin, setUser] = useState({});

  const onLogin = () => {
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
    console.log(inputs);
    console.log(loggedin);
    console.log(`User Logged In! Email: ${inputs.email}`);
    console.log(
      `User Created! Name: ${inputs.firstName} ${inputs.lastName} Email: ${inputs.email}`
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useLoginForm(onLogin);

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
            name='password'
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
