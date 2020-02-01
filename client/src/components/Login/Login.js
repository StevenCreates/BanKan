import React, { useState, useContext, createContext } from "react";
import HomeNavbar from "../HomeNavbar";
import { useLoginForm } from "../hooks/LoginHook";
import { RootContext } from "../../context/RootContext";
import { Link } from "react-router-dom";

function Login() {
  const { authenticated, setAuthenticated } = useContext(RootContext);
  const { authbody, setAuthBody } = useContext(RootContext);
  const { email, setEmail } = useContext(RootContext);

  const onLogin = () => {
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(res => res.json())
      .then(data => setAuthenticated(data.success) && setAuthBody(data.bearer))
      .catch(err => console.log(err));

    setEmail(inputs.email);

    console.log(`User Logged In! Email: ${inputs.email}`);
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
        <Link to='/feed'>
          <button type='submit' renderAs='button'>
            <span>Login</span>
          </button>
        </Link>
        {/* <Link type='submit' to='/feed'>
          Login
        </Link> */}
        {/* <button type='submit'>
          Login
        </button> */}
      </form>
    </div>
  );
}

export default Login;
